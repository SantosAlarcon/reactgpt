import { Configuration, OpenAIApi } from "openai";

const apiKey = "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";
const configuration = new Configuration({ apiKey });

const openai = new OpenAIApi(configuration);
let respuesta;

const enviarConsulta = async (consulta) => {

    respuesta = await openai.createChatCompletion({
	    model: "gpt-3.5-turbo",
	    messages: [{ role: "user", content: consulta }],
    });

}

const devolverRespuesta = () => {
    return respuesta.data.choices[0].message.content;
}

export {devolverRespuesta, enviarConsulta};
