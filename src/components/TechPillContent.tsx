import type { TechItem } from "@/lib/tech";

/** Ícone + nome de uma tecnologia, usado dentro das pílulas. */
const TechPillContent = ({ item }: { item: TechItem }) => (
  <>
    {item.image ? (
      <img src={item.image} alt="" width={18} height={18} className="h-[18px] w-[18px] object-contain" decoding="async" />
    ) : item.Icon ? (
      <item.Icon size={16} className="text-primary" aria-hidden />
    ) : null}
    {item.name}
  </>
);

export default TechPillContent;
