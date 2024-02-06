import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

type CustomImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

// const mdxComponents: MDXComponents = {
//   a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
// };

const CustomImage = ({ src, alt, width, height, caption }: CustomImageProps) => {
  return (
    <figure className="w-full flex justify-center">
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        priority
        quality={100}
        className="rounded-lg"
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

const components = {
  Image: CustomImage,
}

const MdxWrapper = ({ code }: { code: string; }) => {
  const Component = useMDXComponent(code);
  return <Component components={{...components}} />
}

export default MdxWrapper;