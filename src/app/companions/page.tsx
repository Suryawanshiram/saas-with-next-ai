import SearchInput from "@/components/atoms/SearchInput";
import SubjectFilter from "@/components/atoms/SubjectFilter";
import CompanionCard from "@/components/organisms/CompanionCard";
import { getAllCompanions } from "@/lib/actions/campanion.actions";
import { getSubjectColor } from "@/lib/utils";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;

  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanions({ subject, topic });

  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1 className="">Companions Library</h1>

        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>

      <section className="companion-grid  grid grid-cols-3 gap-4 max-sm:grid-cols-1">
        {companions?.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  );
};

export default CompanionsLibrary;
