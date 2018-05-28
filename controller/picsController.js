const cloudinary = require('../lib/cloudinaryWithAuth');


exports.getListAllPicsInFolder = async (req, res, next) => {
    console.log(req.query);
    const cloudinaryReqParams = {
        type: 'upload',
        prefix: req.params.folder
    };

    const addThumbsToImgList = (imgList) => {
        const thumbString = 'c_scale,w_100';

        imgList.forEach(img => {
            const regex = new RegExp(`/(v\\d+?/${img.public_id}.+)`);

            img.secure_url = img.secure_url.replace(regex, `/${thumbString}/$1`);
        });

        return imgList;
    }
    
    
    try {
        const imgs = await cloudinary.v2.api.resources(cloudinaryReqParams);
        
        if (
            req.query
            && req.query.thumbs
            && req.query.thumbs === 'true'
        ) {
            imgs.resources = addThumbsToImgList(imgs.resources);
        }
        const imgList = imgs.resources.map(resource => resource.secure_url);
        
        res.json(imgList);
    } catch (err) {
        console.log(err);
        res.json({response : 'error'})
    }

};

