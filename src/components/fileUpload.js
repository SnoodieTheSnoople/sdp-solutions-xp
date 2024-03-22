import { FileInput, Label } from 'flowbite-react';

export default function FileUploadComponent({ onFileContent }) {

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                onFileContent(e.target.result);
            };
            reader.readAsText(file);
        }
    };

    return (
        <div>
            <div>
                <Label htmlFor="file-upload-helper-text" value='Upload File'/>
            </div>
            <FileInput
                id="file-upload-helper-text"
                helperText="Upload .PHP or .JAVA files."
                accept=".php,.java" 
                onChange={handleFileChange}
            />
        </div>
    );
}
