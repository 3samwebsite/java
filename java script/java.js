
    // Change background and text when hovering
    function upDate(previewPic) {
        console.log("Event triggered for:", previewPic);
        console.log("Image alt:", previewPic.alt);
        console.log("Image src:", previewPic.src);

        const imageDiv = document.getElementById("image");
        imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
        imageDiv.textContent = previewPic.alt;
    }

    // Reset background and text
    function undo() {
        console.log("Undo triggered");
        const imageDiv = document.getElementById("image");
        imageDiv.style.backgroundImage = "url('')";
        imageDiv.textContent = "Hover over an image below to display here.";
    }