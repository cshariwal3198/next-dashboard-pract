import Image from "next/image";
import { images } from "../page";

export default function PictureComponent({ params: { photoId } }: { params: { photoId: string } }) {

    const filteredPhoto = images.find(({ id }) => (id === photoId))!;

    return (
        <div className="container mx-auto my-10 text-center">
            <div className="w-1/2 mx-auto">
                <div>
                    <h1 className="text-center text-3xl font-bold my-4">{filteredPhoto?.name}</h1>
                </div>
                <Image
                    alt={filteredPhoto?.name}
                    src={filteredPhoto?.src}
                    className="w-full object-cover aspect-square "
                />

                <div className="bg-white py-4">
                    <h3>{filteredPhoto?.location}</h3>
                </div>
            </div>
        </div>
    )
}