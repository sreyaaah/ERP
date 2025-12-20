import { Link } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { all_routes } from "../../../../routes/all_routes";
import CommonFooter from "../../../../components/footer/commonFooter";

interface FileWithPreview extends File {
  preview?: string;
}

const FileUpload = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const filesWithPreview = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: file.type.startsWith("image/")
          ? URL.createObjectURL(file)
          : undefined,
      })
    );
    setFiles((prevFiles) => [...prevFiles, ...filesWithPreview]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  const removeFile = (index: number) => {
    setFiles((prevFiles) => {
      const newFiles = prevFiles.filter((_, i) => i !== index);
      // Revoke the URL for the removed file
      if (prevFiles[index].preview) {
        URL.revokeObjectURL(prevFiles[index].preview);
      }
      return newFiles;
    });
  };

  // Cleanup object URLs on component unmount
  useEffect(() => {
    return () => {
      files.forEach((file) => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview);
        }
      });
    };
  }, [files]);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  return (
    <div className="page-wrapper cardhead">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">File Upload</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">File Upload</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Dropzone File Upload</h5>
          </div>
          <div className="card-body">
            <p className="text-muted">
              react-dropzone is an open source library that provides drag'n'drop
              file uploads with image previews.
            </p>
            <div
              {...getRootProps()}
              className={`dropzone ${isDragActive ? "dz-drag-hover" : ""}`}
              style={{
                border: "2px dashed #ddd",
                borderRadius: "4px",
                padding: "40px",
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: isDragActive ? "#f0f0f0" : "transparent",
                transition: "background-color 0.2s ease",
              }}
            >
              <input {...getInputProps()} />
              <div className="dz-message needsclick">
                <i className="ti ti-cloud-upload h1 text-muted" />
                <h3>
                  {isDragActive
                    ? "Drop the files here..."
                    : "Drop files here or click to upload."}
                </h3>
                <span className="text-muted fs-13">
                  (This is just a demo dropzone. Selected files are{" "}
                  <strong>not</strong> actually uploaded.)
                </span>
              </div>
            </div>
            {/* Preview */}
            <div className="dropzone-previews mt-3" id="file-previews">
              {files.map((file, index) => {
                const isImage = file.type.startsWith("image/");

                return (
                  <div key={index} className="card mt-2 mb-0 shadow-none border">
                    <div className="p-2">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          {isImage && file.preview ? (
                            <img
                              src={file.preview}
                              alt={file.name}
                              className="avatar-sm rounded bg-light"
                              style={{
                                width: "40px",
                                height: "40px",
                                objectFit: "cover",
                              }}
                            />
                          ) : (
                            <div className="avatar-sm rounded bg-light d-flex align-items-center justify-content-center">
                              <i className="ti ti-file text-muted" />
                            </div>
                          )}
                        </div>
                        <div className="col ps-0">
                          <Link
                            to="#"
                            className="text-muted fw-bold"
                            onClick={(e) => e.preventDefault()}
                          >
                            {file.name}
                          </Link>
                          <p className="mb-0 text-muted">{formatFileSize(file.size)}</p>
                        </div>
                        <div className="col-auto">
                          <button
                            type="button"
                            className="btn btn-link btn-lg text-muted"
                            onClick={() => removeFile(index)}
                            style={{ border: "none", background: "none", padding: 0 }}
                          >
                            <i className="ti ti-x" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>{" "}
          {/* end card-body */}
        </div>{" "}
        {/* end card */}
      </div>
      <CommonFooter/>
    </div>
  );
};

export default FileUpload;
