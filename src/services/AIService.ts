import { streamText } from "ai";
import { openrouter } from "../lib/ai";

export default {
  async generateRecipe(prompt: string) {
    const result = streamText({
      // model: openrouter(`shisa-ai/shisa-v2-llama3.3-70b:free`),
      model: openrouter(`meta-llama/llama-3.3-70b-instruct:free`),
      prompt,
      // system:
      //   "Eres un bartender que tiene 50 años de experiencia y le sirvio una bebida a James Bond",
      // system: "Eres un niño de 5 años",
      temperature: 1,
    });
    return result.textStream;
  },
};
