/**
 * Smoothly scrolls to a section of the page when clicking on an anchor link
 * Accounts for fixed header offset and includes error handling
 * 
 * @param e - The click event from the anchor element
 * @param offset - Optional offset from the top (useful for fixed headers), defaults to 80px
 */
export const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  offset: number = 80
): void => {
  e.preventDefault();
  
  try {
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    
    if (!elem) {
      console.warn(`Section with id "${targetId}" not found`);
      return;
    }

    const elementPosition = elem.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  } catch (error) {
    console.error("Error scrolling to section:", error);
  }
};
