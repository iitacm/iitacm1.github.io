import { Button } from "@/components/ui/button";

export const NewsletterSignup = () => {
  return (
    <section className="my-8 bg-gradient-to-r from-red-500 to-red-300 text-background rounded-md lg:rounded-lg p-6 md:p-8 w-full max-w-3xl mx-auto text-center relative">
      <h2 className="text-xl md:text-2xl mb-4">Keep In Touch, Join our Newsletter...</h2>
      
      {/* Email Input Form */}
      <form className="flex flex-col md:flex-row items-center gap-4">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full md:flex-1 px-4 py-2 text-fontcolor rounded-md border-none focus:outline-none"
        />
        <Button variant="default" className="bg-white text-red-700 hover:bg-accent-color-primary hover:text-background px-6 py-2 rounded-md">
          SUBSCRIBE
        </Button>
      </form>

      {/* Floating Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-2 h-2 bg-red-700 opacity-50 rotate-45"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};