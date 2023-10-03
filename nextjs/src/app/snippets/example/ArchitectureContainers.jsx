import Image from 'next/image'
import architectureContainersSrc from './architecture-containers.png'

export default function ArchitectureContainersImage() {
  return (
        <Image
            src={architectureContainersSrc}
            className="mx-auto"
            height={24}
            width={600}
            alt="Container Architecture from Visual Studio Code Dev Containers Documentation"
        />
  );
}