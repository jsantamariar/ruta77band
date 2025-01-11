import Image from "next/image";

export const NewSingleToast = () => {
  return (
    <>
      <div className="bg-black bg-opacity-10 rounded-md flex flex-col items-start justify-center space-y-4 z-10 gap-2 fixed bottom-0 right-0 p-4">
        <h2 className="text-white text-xl font-medium">
          Escucha nuestro más reciente demo
        </h2>
        <button className="text-white bg-black rounded-md p-2 m-0">
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/music-note.svg"
              width={20}
              height={20}
              alt="Music Note"
              className="m-0"
            />
            <span>Escuchar</span>
          </div>
        </button>
      </div>
    </>
  );
};
