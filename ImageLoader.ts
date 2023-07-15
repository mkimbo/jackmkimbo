type Source = {
  src: string;
};

export default function ImageLoader({ src }: Source) {
  return `${process.env.NEXT_PUBLIC_SITE_URL}/${src}`;
}
