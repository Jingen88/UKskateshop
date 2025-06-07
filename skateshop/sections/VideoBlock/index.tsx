import { Bounded } from "@/components/Bounded";
import { LazyYouTubePlayer } from "./LazyYouTubePlayer";
import Image from "next/image";

const MASK_CLASSES =
  "[mask-image:url(/video-mask.png)] [mask-mode:alpha] [mask-position:center_center] [mask-repeat:no-repeat] [mask-size:100%_auto]";

const VideoBlock = ({ youTubeID }: { youTubeID: string }) => {
  return (
    <Bounded
      as="section"
      className="bg-texture bg-zinc-900"
    >
      <div className="relative aspect-video">
        <div className={MASK_CLASSES + " relative h-full"}>
          {youTubeID ? <LazyYouTubePlayer youTubeID={youTubeID} /> : null}
          <Image
            src="/image-texture.png"
            alt=""
            fill
            className="pointer-events-none object-cover opacity-50"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default VideoBlock;
