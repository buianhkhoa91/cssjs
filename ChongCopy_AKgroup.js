function FSAddOriginalLink(){
    var body_element = document.getElementsByTagName('body')[0];
    var selection;
    selection = window.getSelection();
    var pagelink = "<br/><br/> Auto-AKgroup chuyên mua bán ô tô cũ tại TP.HCM
    Tại sao bạn nên Mua Bán Ô Tô Cũ tại Auto-AKgroup:
    - Auto-AKgroup cung cấp đa dạng các dòng xe
    - Auto-AKgroup đảm bảo giá tốt nhất và cạnh tranh nhất thị trường Việt Nam
    - Auto-AKgroup có nhiều chính sách cho vay ưu đãi hấp dẫn nhất
    - Auto-AKgroup cung cấp dịch vụ bảo trì & bảo hành xe dài hạn
    Xem các bài viết hữu ích khác tại: http://auto-akgroup.com/";
    var copytext = pagelink;
    var newdiv = document.createElement('div');
    newdiv.style.position='absolute';
    newdiv.style.left='-99999px';
    body_element.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout(function() {
        body_element.removeChild(newdiv);
    },0);
}
document.oncopy = FSAddOriginalLink;
