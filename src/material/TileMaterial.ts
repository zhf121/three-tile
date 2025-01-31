import { FrontSide, MeshStandardMaterial, MeshStandardMaterialParameters } from "three";

/**
 * Tile material
 */
export class TileMaterial extends MeshStandardMaterial {
	constructor(params: MeshStandardMaterialParameters = { transparent: true, side: FrontSide }) {
		super(params);
	}

	public dispose(): void {
		const texture = this.map;
		if (texture) {
			if (texture.image instanceof ImageBitmap) {
				texture.image.close();
			}
			texture.dispose();
		}
	}
}
