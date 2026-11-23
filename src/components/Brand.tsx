import { brand } from '../content.ts';

export function Brand() {
  return (
    <div className="brand" role="img" aria-label={`${brand.name}, ${brand.title}`}>
      <img className="brand__monogram" src="./media/brand/monogram.svg" width="168" height="112" alt="" />
      <img className="brand__name" src="./media/brand/name.svg" width="680" height="79" alt="" />
      <img className="brand__title" src="./media/brand/title.svg" width="337" height="20" alt="" />
    </div>
  );
}
