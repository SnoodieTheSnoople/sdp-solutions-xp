
import { FileInput, Label } from 'flowbite-react';

export default function FileUploadComponent() {

    const handleFileChange = (event) => {
        const file = event.target.files[0]; 
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setContent(e.target.result); 
            };
            reader.readAsText(file); 
        }
    };
    
    return(
        <div>
            <div>
                <Label htmlFor="file-upload-helper-text" value='Upload File'/>
            </div>
            <FileInput 
                id="file-upload-helper-text"
                helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
                onChange={handleFileChange}
            />
        </div>
    );
}
