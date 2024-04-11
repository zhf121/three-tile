import { Color, Material, MeshBasicMaterial } from "three";
import { ISource, ITileMaterialLoader, Tile } from "../..";

/**
 * Wireframe material loader
 */
export class TileMaterialWrieLoader implements ITileMaterialLoader {
	public readonly dataType: string = "wireframe";

	public load(source: ISource, tile: Tile, onLoad: () => void, _onError: (err: any) => void): Material {
		const color = new Color(`hsl(${tile.coord.z * 14}, 100%, 50%)`);
		const material = new MeshBasicMaterial({
			transparent: true,
			wireframe: true,
			color,
			opacity: source.opacity,
		});
		setTimeout(onLoad);
		return material;
	}
}
