import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
}: CompanionCardProps) => {
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark">
          <Image
            // src="/images/bookmark.svg"
            src="/icons/bookmark.svg"
            alt="bookmark"
            width={12.5}
            height={15}
            unoptimized
          />
        </button>
      </div>
      <h2 className="text-2xl font-bold dark:text-white">{name}</h2>
      <p className="text-sm dark:text-white">{topic}</p>
      <div className="flex items-center gap-2">
        <Image
          src="/icons/clock.svg"
          alt="clock"
          width={16}
          height={16}
          unoptimized
          className="bg-white rounded-full p-1"
        />
        <span className="text-sm text-white">{duration} minutes</span>
      </div>
      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary bg-black w-full justify-center">
          Launch Lesson
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;
