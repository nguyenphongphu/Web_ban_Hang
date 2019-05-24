$("#btnBackPost").on('click', function () {
    $(".review-news-box").css("display", "none");
    $("#dangtin").removeAttr('style');   
})
$("#btnReview").on('click', function () {
    $("#dangtin").css("display", "none");
    $(".review-news-box").removeAttr('style');
})
$("#files").change(function () {
    
    readURL(this);
    check(this);
    
});
function readURL(input) {
    if (input.files.length > 0) {
        
        for (i = 0; i < input.files.length; i++) {
            var formdata = new FormData();
            formdata.append('file', input.files[i]);
            $.ajax(
                {
                    type: 'POST',
                    url: '/User/Temp',
                    contentType: false,
                    processData: false,
                    data: formdata,
                    success: function (urlimage) {
                        var linh =
                            "<li>" +
                            "<div class='upload-item img-thumb-upload'>" +
                            "<span>" +
                            "<img id='anh' src='" + urlimage + "' rel='" + urlimage + "' >" +
                            "</span>" +
                            "<a href='javascript:' class='upload-item-delete delete-img-upload'>" +
                            "<i class='fa fa-trash'aria-hidden=true'></i>" +
                            "</a>" +
                            "</div>" +
                            "</li >";
                        $('#uploadimage').append(linh);
                    },
                    error: function (e) {
                        alert("co loi " + e.statusText);
                    }

                });
        }               
        return false;
    }
    
}
function check(img) {
    i = img.files.length();
    if (i > 6) {
       
    }
    
}
    $("#uploadimage").on("click", "li a", function () {
        var image = $('#anh').attr("rel");       
        $.ajax(
            {
                type: 'POST',
                url: '/User/deletefile',
                contentType: false,
                processData: false,
                data: image,
                success: function (urlimage) {
                    alert(urlimage);
                },
                error: function (e) {
                    alert("co loi " + e.statusText);
                }

            });
        $(this).closest("li").remove();
    });



//var initActionImage = function () {
//    var instanceID = $(this).attr('id');
//    var isIE7 = false;
//    if (navigator.appVersion.indexOf("MSIE 6.") != -1
//        || navigator.appVersion.indexOf("MSIE 7.") != -1
//        || navigator.appVersion.indexOf("MSIE 8.") != -1
//        || navigator.appVersion.indexOf("MSIE 9.") != -1) {
//        isIE7 = true;
//    }
//    //tạo sự kiện xóa và xoay
//    $('#' + instanceID + ' .upload-item .upload-item-delete').unbind('click');
//    $('#' + instanceID + ' .upload-item .upload-item-delete').click(function () {
//        //if (confirm('Bạn có chắc chắn muốn xoá ảnh này ?')) 
//        {
//            var image = $(this).parent().attr('rel');
//            var listImage = removeImage2List($('#' + parameters.target).val(), image);
//            $('#' + parameters.target).val(listImage);
//            $(this).parents("li").remove();
//            if (!isIE7) {
//                //nếu xóa xong mà chưa có cái nào để upload thì phải show ra 1 cái
//                if ($('#' + instanceID + ' .working-upload-item').length == 0) {
//                    $('#' + instanceID).append(uploadItemTemplate);
//                    initOpenFileBrowser();
//                }
//            }
//            else {
//                //nếu xóa xong mà chưa có cái nào để upload thì phải show ra 1 cái
//                if ($('#' + instanceID + ' .working-upload-item').length == 0) {
//                    $('#' + instanceID).append(uploadItemTemplateIE7);
//                    createEvenForControlIE7();
//                }
//            }
//        }
//    });
//    $('#' + instanceID + ' .upload-item .upload-item-rotate').unbind('click');
//    $('#' + instanceID + ' .upload-item .upload-item-rotate').click(function () {
//        var image = $(this).parent().attr('rel');
//        var newimage = '';
//        if (image.indexOf(defaults.rotateActionName) == -1) newimage = defaults.rotate90ActionName + image;
//        else if (image.indexOf(defaults.rotate90ActionName) != -1) newimage = defaults.rotate180ActionName + image.replace(defaults.rotate90ActionName, '');
//        else if (image.indexOf(defaults.rotate180ActionName) != -1) newimage = defaults.rotate270ActionName + image.replace(defaults.rotate180ActionName, '');
//        else if (image.indexOf(defaults.rotate270ActionName) != -1) newimage = image.replace(defaults.rotate270ActionName, '');
//        var listImage = replaceImage2List($('#' + parameters.target).val(), image, newimage);
//        $('#' + parameters.target).val(listImage);
//        if (!isIE7) {
//            $(this).parent().attr('style', 'background:url(\'' + defaults.serverThumb + '/' + newimage + '\')  no-repeat scroll 0% 0%;background-color:transparent; background-size:  ' + defaults.itemWidth + 'px ' + defaults.itemHeight + 'px ');
//            $(this).parent().attr('rel', newimage); //dùng làm data cho sự kiện xóa và xoay
//        }
//        else {
//            $(this).parent().find('.background').remove();
//            $(this).parent().append('<img class="background" src="' + defaults.serverThumb + '/' + newimage + '"/>');
//            $(this).parent().attr('rel', newimage); //dùng làm data cho sự kiện xóa và xoay
//        }
//    });
//}


 //var xhr = new XMLHttpRequest();
        //xhr.open('POST', '/User/Upload');
        //xhr.send(formdata);
        //xhr.onreadystatechange = function () {
        //    if (xhr.readyState == 4 && xhr.status == 200) {
        //        alert(xhr.responseText);
        //    } else {

        //        reader.onload = function (e) {
        //            var linh =
        //                "<li>" +
        //                "<div class='upload-item img-thumb-upload'>" +
        //                "<span>" +
        //                "<img id='anh' src='' >" +
        //                "</span>" +
        //                "<a href='javascript:' class='upload-item-delete delete-img-upload'>" +
        //                "<i class='fa fa-trash'aria-hidden=true'></i>" +
        //                "</a>" +
        //                "</div>" +
        //                "</li >";
        //            $('#uploadimage').append(linh);


        //            $('#anh').attr('src', e.target.result);
        //        }

        //        reader.readAsDataURL(input.files[0]);
        //    }
        //}