'use client'

import { useEffect, useState, useCallback } from 'react'
import '@n8n/chat/style.css'
import { createChat } from '@n8n/chat'
import { ErrorBoundary } from 'react-error-boundary'

// Type definitions for n8n chat
interface ChatI18n {
  [message: string]: string
  title: string
  subtitle: string
  footer: string
  getStarted: string
  inputPlaceholder: string
  closeButtonTooltip: string
}

interface ChatConfig {
  webhookUrl: string
  initialMessages: string[]
  i18n: Record<string, ChatI18n>
}

type ChatInstance = {
  destroy: () => void
} & Record<string, unknown>

function LoadingSpinner() {
  return (
    <div 
      role="status"
      className="flex items-center justify-center h-32"
      aria-label="チャットを読み込み中"
    >
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
    </div>
  )
}

function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div 
      role="alert" 
      className="text-center p-4 bg-red-50 dark:bg-red-900/10 rounded-lg"
      aria-labelledby="error-title"
    >
      <h3 id="error-title" className="text-red-500 font-semibold mb-2">
        チャットの読み込みに失敗しました
      </h3>
      <pre className="text-sm text-red-400 mb-4 whitespace-pre-wrap">
        {error.message}
      </pre>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        再試行
      </button>
    </div>
  )
}

function CreateChatContent() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [chatInstance, setChatInstance] = useState<ChatInstance | null>(null)

  const initializeChat = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)

      const config = {
        webhookUrl: 'https://n8n-1-9y7i.onrender.com/webhook/7df1ebe3-851e-4e76-b360-1fc5b9d56b3d/chat',
        initialMessages: [
          '明子のAIです 👋',
          '明ちゃんです. 御用は何でしょうか?'
        ],
        i18n: {
          en: {
            title: '',
            subtitle: '24時間365日対応いたします。',
            footer: '',
            getStarted: 'ニューチャット',
            inputPlaceholder: 'こちらに入力...',
            closeButtonTooltip: '',
            message: '' // Required by ChatI18n type
          }
        }
      }

      const instance = await createChat(config)
      // Type assertion after checking for destroy method
      if (typeof instance === 'object' && instance !== null && 'destroy' in instance) {
        setChatInstance(instance as ChatInstance)
      } else {
        throw new Error('Invalid chat instance returned')
      }
      setIsLoading(false)
    } catch (err) {
      const error = err instanceof Error ? err : new Error('チャットの初期化に失敗しました')
      setError(error)
      setIsLoading(false)
      console.error('Chat initialization error:', err)
    }
  }, [])

  useEffect(() => {
    let mounted = true

    const init = async () => {
      if (mounted) {
        await initializeChat()
      }
    }

    init()

    return () => {
      mounted = false
      if (chatInstance?.destroy) {
        try {
          chatInstance.destroy()
        } catch (err) {
          console.error('Error destroying chat instance:', err)
        }
      }
    }
  }, [initializeChat])

  if (error) {
    throw error // ErrorBoundary will catch this
  }

  return (
    <div 
      aria-hidden={isLoading}
      className="relative min-h-[300px]"
      role="complementary"
      aria-label="AIチャットボット"
    >
      {isLoading && <LoadingSpinner />}
    </div>
  )
}

export default function CreateChat() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset the state and re-initialize the chat
        window.location.reload()
      }}
    >
      <CreateChatContent />
    </ErrorBoundary>
  )
}
