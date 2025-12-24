import type { ImageFile } from "../types";

interface Props {
  images: ImageFile[];
  addImage: (image: ImageFile) => void;
  removeImage: (id: string) => void;
}

const ImagesSection = ({ images, addImage, removeImage }: Props) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files;
  if (!files) return;

  Array.from(files).forEach((file) => {
    addImage({
      id: crypto.randomUUID(),
      file,
      url: URL.createObjectURL(file),
    });
  });

  e.target.value = "";
}

  return (
    <div className="accordion-item border mb-4">
      <h2 className="accordion-header" id="headingSpacingThree">
        <div
          className="accordion-button collapsed bg-white"
          data-bs-toggle="collapse"
          data-bs-target="#SpacingThree"
          aria-expanded="true"
          aria-controls="SpacingThree"
        >
          <div className="d-flex align-items-center justify-content-between flex-fill">
            <h5 className="d-flex align-items-center">
              <i className="feather icon-image text-primary me-2" />
              <span>Images</span>
            </h5>
          </div>
        </div>
      </h2>

      <div
        id="SpacingThree"
        className="accordion-collapse collapse show"
        aria-labelledby="headingSpacingThree"
      >
        <div className="accordion-body border-top">
          <div className="add-choosen">
            <div className="mb-3">
              <div className="image-upload">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                />
                <div className="image-uploads">
                  <i className="feather icon-plus-circle plus-down-add me-0" />
                  <h4>Add Images</h4>
                </div>
              </div>
            </div>
            <div className="d-flex flex-wrap gap-3">
              {images.map((image) => (
                <div key={image.id} className="phone-img position-relative">
                  <img src={image.url} alt="product" />

                  <button
                    type="button"
                    className="remove-product"
                    onClick={() => removeImage(image.id)}
                  >
                    <i className="feather icon-x" />
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesSection;
