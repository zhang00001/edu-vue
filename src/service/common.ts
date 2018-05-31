export class Common {
    /** 选择文件 */
    selectFile(accept = 'image/*', multiple = true): Promise<File | FileList> {
        return new Promise<File | FileList>((resolve: any) => {
            let inputEl = document.createElement('input');
            inputEl.accept = accept;
            inputEl.multiple = multiple;
            inputEl.type = "file";
            inputEl.accept = accept;
            inputEl.onchange = function () {
                resolve(multiple ? inputEl.files : (inputEl.files as FileList)[0])
            }
            inputEl.click();
        })
    }
    /** 文件转换为base64 */
    convertFileToBase64(file: File): Promise<string> {
        return new Promise(resolve => {
            let reader = new FileReader();
            reader.onload = function (e) {
                resolve(e.target["result"])
            }
            reader.readAsDataURL(file);
        })
    }

    /**
     * 
     * @param base64   string
    * 
     * @param outputFormat string 
     * 
     * 将base64图片压缩到一定像素以下
     */
    compressBase64(base64: string, maxsize: number = 40000, outputFormat = "image/png"): Promise<string> {
        return new Promise((resolve, reject) => {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var img = new Image;
            img.crossOrigin = 'Anonymous';
            img.onload = function () {
                var width = img.width;
                var height = img.height;
                let compress = 1;
                let rate = 1
                if (width * height > maxsize) { rate = Math.ceil(width * height / 40000); }
                compress = 1 / rate;
                canvas.width = width * compress;
                canvas.height = height * compress;
                ctx.drawImage(img, 0, 0, width, height, 0, 0, width * compress, height * compress);
                let compressData = canvas.toDataURL(outputFormat)
                resolve(compressData);
            };
            img.src = base64;
        });
    }
    /**获得一个base64图片 */
    async selectBase64Image(maxsize?: number): Promise<string> {
        let file: File = await this.selectFile('images/*', false) as File;
        let base64 = await this.convertFileToBase64(file);
        return maxsize ? await this.compressBase64(base64, maxsize) : base64

    }
    /**获取多张base64拖 */
    async selectBase64Images(maxsize?: number): Promise<string[]> {
        let files: FileList = await this.selectFile('images/*', false) as FileList;
        let base64es = [];
        for (let i = 0; i < files.length; i++) {
            let file = files.item(i);
            let base64 = await this.convertFileToBase64(file);
            base64es.push(maxsize ? await this.compressBase64(base64, maxsize) : base64);
        }
        return base64es;
    }





}
