import { Empty } from "@/components/retroui/Empty";

export default function DefaultEmpty() {
  return (
    <Empty>
      <Empty.Header>
        <Empty.Title>This is Empty Title</Empty.Title>
        <Empty.Description>
          I can not find what to write here.. so imagine I wrote some good
          stuff.
        </Empty.Description>
      </Empty.Header>
    </Empty>
  );
}
