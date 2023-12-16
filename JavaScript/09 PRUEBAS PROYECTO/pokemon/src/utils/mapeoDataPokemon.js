import { getAll } from "../../src/services/pokeApi.service";

export const mappeoData = async () => {
    constRawData = await getAll();
    return RawData.results.map((item) =>({
        name:item.name,
        url:item.url,
        //aqui tendria que poner las imagenes pero no puedo acceder a ellas porque no se donde estan en la pokeapi
    }))
}

