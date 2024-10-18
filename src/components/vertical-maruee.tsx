import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const logos = [
  {
    img: "/logos/bolt.png",
  },
  {
    img: "/logos/calender-fold.png",
  },
  {
    img: "/logos/hard-hat.png",
  },
  {
    img: "/logos/hammer.png",
  },
  {
    img: "/logos/construction.png",
  },
  {
    img: "/logos/ruler.png",
  },
  {
    img: "/logos/wrench.png",
  },
];

const LogoCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "flex relative w-28 cursor-pointer items-center justify-center"
      )}
    >
      <div className="flex flex-row items-center justify-center my-4">
        <img width={50} alt="" src={img} />
      </div>
    </figure>
  );
};

export function VerticalMarquee() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden md:shadw-xl gap-2 lg:gap-8">
      <Marquee
        reverse
        vertical
        className="[--duration:10s] items-center justify-center"
      >
        {logos.map((logo, i) => (
          <LogoCard key={i} {...logo} />
        ))}
      </Marquee>
      <Marquee
        vertical
        className="[--duration:10s] items-center justify-center"
      >
        {logos.map((logo, i) => (
          <LogoCard key={i} {...logo} />
        ))}
      </Marquee>
      <Marquee
        reverse
        vertical
        className="[--duration:10s] items-center justify-center"
      >
        {logos.map((logo, i) => (
          <LogoCard key={i} {...logo} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-zinc-200 dark:from-zinc-800"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-zinc-200 dark:from-zinc-800"></div>
    </div>
  );
}