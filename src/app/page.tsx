
import BlogPage from "@/components/Blog";
import { CardDemo } from "@/components/ui/Card";

export default function Home() {
  return (
    <main>
      <main >
                  <BlogPage/>
                  <div className="bg-[#161616]  py-20  " id="Card">
                      <div className="max-w-[650px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
                      <CardDemo/>
      
                      </div>
                      
                  </div>
              </main>
    </main>
  );
}
