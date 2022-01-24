import { Quote } from "../types";

type QuoteProps = {
  quote: Quote;
};

export default function QuoteItem({ quote }: QuoteProps) {
  return <blockquote>{quote.dialog}</blockquote>;
}
