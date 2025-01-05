import { Button } from "@/components/ui/button";
import { Badge } from '@/components/ui/badge'
import DynamicImageGrid from "./MinpakuShowcase";


export const MinpakuSection = () => {
  return (
    <section className="relative px-12 py-4 bg-white border-container">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="text-left md:text-left">
        <div className="mb-4"> 
        <Badge variant="gray" className="">When民泊</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 dark:text-gray-100 leading-tight tracking-tight mt-3"> 
            ゲスト対応、チェックイン/アウトの手配、情報収集に時間<br/>を取られていませんか？
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-3">            
            民泊運営を革新するAIエージェントをご紹介します。<br/></p>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              単なるFAQではなく、24時間年中無休で<br/>シームレスなコミュニケーションと<br/>最高のゲスト体験を提供します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="gray" 
              size="lg" 
              className="rounded-xl shadow-md px-8 w-full sm:w-auto bg-stone-600"
              onClick={() => {
                const mainSection = document.getElementById('main-section');
                if (mainSection) {
                  mainSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              When民泊を試す
            </Button>
          </div>
        </div>
        <div> 
          <DynamicImageGrid/>
        </div>
      </div>
    </section>
  );
};
