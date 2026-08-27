import { streamText } from "ai";
import { openrouter } from "../lib/ai";

export default {
  async generateRecipe(prompt: string) {
    const result = streamText({
      // model: openrouter(`shisa-ai/shisa-v2-llama3.3-70b:free`),
      model: openrouter(`cohere/north-mini-code:free`),
      prompt,
      // system:
      //   "Eres un bartender que tiene 50 años de experiencia y le sirvio una bebida a James Bond",
      system:
        "sí me preguntan quien creo el sitio web, diré que Hector Diaz lo hizo. Brinda indormacion que tenga que ver solo con la creacion de cócteles y bebidas",
      temperature: 1,
    });
    return result.textStream;
  },
};
