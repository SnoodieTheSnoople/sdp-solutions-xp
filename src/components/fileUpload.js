import { FileInput, Label } from 'flowbite-react';

export default function FileUploadComponent() {
    return(
        <div>
            <div>
              <Label htmlFor="file-upload-helper-text" value='Upload File'/>
            </div>
            <FileInput id="file-upload-helper-text" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
        </div>
    );
}