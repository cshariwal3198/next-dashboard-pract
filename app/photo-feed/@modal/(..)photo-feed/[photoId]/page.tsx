import { images } from "@/app/photo-feed/page";
import Modal from "@/components/modal";
import Image from "next/image";

export default function PhotoWithModal({ params: { photoId } }: { params: { photoId: string } }) {

    const photo = images.find(({ id }) => (id === photoId))!;

    return (
        <Modal>
            <Image
                alt={photo.name}
                src={photo.src}
                className="w-full object-cover aspect-square"
            />
            <div className="bg-white p-4">
                <h2 className="text-xl font-semibold">{photo.name}</h2>
                <h3>{photo.location}</h3>
            </div>
        </Modal>
    )
}