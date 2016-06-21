function getDataForImg() {
    var imgData = ctx.getImageData(10, 10, 50, 50);
    ctx.putImageData(imgData, 10, 70);
}
