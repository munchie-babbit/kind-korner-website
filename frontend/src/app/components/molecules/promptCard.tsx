import Card from "../atoms/card";

export default function PromptCard({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <Card>
      <p className="font-bold">{question}</p>
      <p className="pt-2">{answer}</p>
    </Card>
  );
}
