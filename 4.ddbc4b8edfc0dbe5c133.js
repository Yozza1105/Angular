(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Iab2:function(t,e,a){var n,o;void 0===(o="function"==typeof(n=function(){"use strict";function e(t,e,a){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){c(n.response,e,a)},n.onerror=function(){console.error("could not download file")},n.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function n(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(a)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,i=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(t,i,c){var l=o.URL||o.webkitURL,b=document.createElement("a");b.download=i=i||t.name||"download",b.rel="noopener","string"==typeof t?(b.href=t,b.origin===location.origin?n(b):a(b.href)?e(t,i,c):n(b,b.target="_blank")):(b.href=l.createObjectURL(t),setTimeout(function(){l.revokeObjectURL(b.href)},4e4),setTimeout(function(){n(b)},0))}:"msSaveOrOpenBlob"in navigator?function(t,o,i){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,i),o);else if(a(t))e(t,o,i);else{var c=document.createElement("a");c.href=t,c.target="_blank",setTimeout(function(){n(c)})}}:function(t,a,n,c){if((c=c||open("","_blank"))&&(c.document.title=c.document.body.innerText="downloading..."),"string"==typeof t)return e(t,a,n);var l="application/octet-stream"===t.type,b=/constructor/i.test(o.HTMLElement)||o.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||l&&b||i)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var t=d.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),c?c.location.href=t:location=t,c=null},d.readAsDataURL(t)}else{var r=o.URL||o.webkitURL,u=r.createObjectURL(t);c?c.location=u:location.href=u,c=null,setTimeout(function(){r.revokeObjectURL(u)},4e4)}});o.saveAs=c.saveAs=c,t.exports=c})?n.apply(e,[]):n)||(t.exports=o)},jkDv:function(t,e,a){"use strict";a.r(e),a.d(e,"AdminModule",function(){return F});var n=a("ofXK"),o=a("fXoL"),i=a("H+bZ"),c=a("tyNb"),l=a("/t3+"),b=a("bTqV"),s=a("NFeN"),d=a("XhcP"),r=a("MutI"),u=a("FKr1");let p=(()=>{class t{constructor(t,e){this.api=t,this.router=e,this.mode="side"}ngOnInit(){this.checkLogin()}checkLogin(){this.api.get("bookswithauth/status").subscribe(t=>{},t=>{this.router.navigate(["/login"])})}logout(){confirm("Keluar aplikasi?")&&(localStorage.removeItem("appToken"),window.location.reload())}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(i.a),o.Nb(c.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-admin"]],decls:30,vars:8,consts:[["color","primary",1,"example-header"],["mat-icon-button","",3,"click"],[1,"uk-width-expand"],["mat-button","",3,"click"],[1,"admin-container"],["mode","side","opened","",1,"sidenav-left",3,"position","fixedInViewport","fixedTopGap","fixedBottomGap"],["sidenav",""],["routerLink","/admin/dashboard"],["matListIcon",""],["matLine",""],["routerLink","/admin/product"],["mode","side",1,"example-sidenav",3,"position","fixedInViewport","fixedTopGap","fixedBottomGap"],[2,"padding","20px","background-color","#ccc"]],template:function(t,e){if(1&t){const t=o.Ub();o.Rb(0),o.Tb(1,"mat-toolbar",0),o.Tb(2,"button",1),o.ac("click",function(){return o.qc(t),o.oc(14).toggle()}),o.Tb(3,"mat-icon"),o.xc(4,"menu"),o.Sb(),o.Sb(),o.Tb(5,"span"),o.xc(6,"Yozza's Angular"),o.Sb(),o.Ob(7,"div",2),o.Tb(8,"small"),o.xc(9,"Admin"),o.Sb(),o.Tb(10,"button",3),o.ac("click",function(){return e.logout()}),o.xc(11,"Logout"),o.Sb(),o.Sb(),o.Tb(12,"mat-sidenav-container",4),o.Tb(13,"mat-sidenav",5,6),o.Tb(15,"mat-nav-list"),o.Tb(16,"mat-list-item",7),o.Tb(17,"mat-icon",8),o.xc(18,"dashboard"),o.Sb(),o.Tb(19,"h3",9),o.xc(20,"Dashboard"),o.Sb(),o.Sb(),o.Tb(21,"mat-list-item",10),o.Tb(22,"mat-icon",8),o.xc(23,"camera_enhance"),o.Sb(),o.Tb(24,"h3",9),o.xc(25,"Products"),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Ob(26,"mat-sidenav",11,6),o.Tb(28,"mat-sidenav-content",12),o.Ob(29,"router-outlet"),o.Sb(),o.Sb(),o.Qb()}2&t&&(o.Cb(13),o.jc("position","start")("fixedInViewport",!0)("fixedTopGap",60)("fixedBottomGap",0),o.Cb(13),o.jc("position","end")("fixedInViewport",!0)("fixedTopGap",60)("fixedBottomGap",0))},directives:[l.a,b.a,s.a,d.b,d.a,r.d,r.b,c.b,r.a,u.j,d.c,c.d],styles:[".example-container[_ngcontent-%COMP%]{position:absolute;top:60px;bottom:0;left:0;right:0}.example-sidenav[_ngcontent-%COMP%]{width:350px}.example-sidenav[_ngcontent-%COMP%], .sidenav-left[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.sidenav-left[_ngcontent-%COMP%]{width:250px}"]}),t})(),f=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Hb({type:t,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(t,e){1&t&&(o.Tb(0,"h2"),o.xc(1,"Dashboard"),o.Sb())},styles:[""]}),t})();var g=a("w55g");let h=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Hb({type:t,selectors:[["app-gallery"]],decls:2,vars:0,template:function(t,e){1&t&&(o.Tb(0,"p"),o.xc(1,"gallery works!"),o.Sb())},styles:[""]}),t})();var m=a("Iab2"),T=a("0IaG");let x=(()=>{class t{constructor(t,e,a){this.api=t,this.dialogRef=e,this.dialogData=a}ngOnInit(){console.log(this.dialogData)}onFileChange(t){t.target.files.length>0&&(this.selectedFile=t.target.files[0],console.log(this.selectedFile))}uploadFile(){let t=new FormData;t.append("file",this.selectedFile),this.loadingUpload=!0,this.api.upload(t).subscribe(t=>{this.updateProduct(t),console.log(t)},t=>{this.loadingUpload=!1,alert("Gagal mengunggah file")})}updateProduct(t){1==t.status?(this.updateBook(t),alert("File berhasil diunggah"),this.loadingUpload=!1,this.dialogRef.close()):alert(t.message)}updateBook(t){this.api.put("books/"+this.dialogData.id,{url:t.url}).subscribe(t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(i.a),o.Nb(T.g),o.Nb(T.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-file-uploader"]],decls:13,vars:3,consts:[["mat-dialog-title",""],["mat-diaolog-content",""],[1,"uk-flex","uk-flex-middle","uk-flex-center",2,"height","100px","outline","2px dashed #ccc","margin","10px",3,"click"],["type","file","id","file",2,"display","none",3,"change"],["fileInput",""],["mat-dialog-actions",""],["mat-button","","mat-dialog-close",""],["mat-flat-button","","color","primary",3,"disabled","click"]],template:function(t,e){if(1&t){const t=o.Ub();o.Tb(0,"h1",0),o.xc(1,"Unggah File"),o.Sb(),o.Tb(2,"div",1),o.Tb(3,"div",2),o.ac("click",function(){return o.qc(t),o.oc(7).click()}),o.Tb(4,"span"),o.xc(5),o.Sb(),o.Tb(6,"input",3,4),o.ac("change",function(t){return e.onFileChange(t)}),o.Sb(),o.Sb(),o.Tb(8,"div",5),o.Tb(9,"button",6),o.xc(10,"Cancel"),o.Sb(),o.Tb(11,"button",7),o.ac("click",function(){return e.uploadFile()}),o.xc(12),o.Sb(),o.Sb(),o.Sb()}2&t&&(o.Cb(5),o.yc(e.selectedFile?e.selectedFile.name:"Pilih File"),o.Cb(6),o.jc("disabled",e.loadingUpload),o.Cb(1),o.yc(e.loadingUpload?"Uploading...":"Upload"))},directives:[T.h,T.c,b.a,T.d],styles:[""]}),t})();var S=a("kmnG"),k=a("qFsG"),v=a("3Pt+");let w=(()=>{class t{constructor(t,e,a){this.dialogRef=t,this.data=e,this.api=a}ngOnInit(){}saveData(){this.loading=!0,null==this.data.id?this.api.post("books",this.data).subscribe(t=>{this.dialogRef.close(this.data),this.loading=!1},t=>{this.loading=!1,alert("Tidak dapat menyimpan data")}):this.api.put("books/"+this.data.id,this.data).subscribe(t=>{this.dialogRef.close(t)},t=>{this.loading=!1,alert("Tidak dapat memperbarui data")})}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(T.g),o.Nb(T.a),o.Nb(i.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-product-detail"]],decls:32,vars:8,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["appearance","outline",2,"width","100%"],["matInput","",3,"ngModel","ngModelChange"],["matInput","","type","number",3,"ngModel","ngModelChange"],["mat-dialog-actions","","align","end"],["mat-button","","mat-dialog-close",""],["mat-flat-button","",3,"disabled","click"]],template:function(t,e){1&t&&(o.Tb(0,"h3",0),o.xc(1," Detail Produk\n"),o.Sb(),o.Tb(2,"div",1),o.Tb(3,"mat-form-field",2),o.Tb(4,"mat-label"),o.xc(5,"Judul"),o.Sb(),o.Tb(6,"input",3),o.ac("ngModelChange",function(t){return e.data.title=t}),o.Sb(),o.Sb(),o.Tb(7,"mat-form-field",2),o.Tb(8,"mat-label"),o.xc(9,"Penulis"),o.Sb(),o.Tb(10,"input",3),o.ac("ngModelChange",function(t){return e.data.author=t}),o.Sb(),o.Sb(),o.Tb(11,"mat-form-field",2),o.Tb(12,"mat-label"),o.xc(13,"Penerbit"),o.Sb(),o.Tb(14,"input",3),o.ac("ngModelChange",function(t){return e.data.publisher=t}),o.Sb(),o.Sb(),o.Tb(15,"mat-form-field",2),o.Tb(16,"mat-label"),o.xc(17,"Tahun Terbit"),o.Sb(),o.Tb(18,"input",3),o.ac("ngModelChange",function(t){return e.data.year=t}),o.Sb(),o.Sb(),o.Tb(19,"mat-form-field",2),o.Tb(20,"mat-label"),o.xc(21,"ISBN"),o.Sb(),o.Tb(22,"input",3),o.ac("ngModelChange",function(t){return e.data.isbn=t}),o.Sb(),o.Sb(),o.Tb(23,"mat-form-field",2),o.Tb(24,"mat-label"),o.xc(25,"Harga"),o.Sb(),o.Tb(26,"input",4),o.ac("ngModelChange",function(t){return e.data.price=t}),o.Sb(),o.Sb(),o.Sb(),o.Tb(27,"div",5),o.Tb(28,"button",6),o.xc(29,"Batal"),o.Sb(),o.Tb(30,"button",7),o.ac("click",function(){return e.saveData()}),o.xc(31),o.Sb(),o.Sb()),2&t&&(o.Cb(6),o.jc("ngModel",e.data.title),o.Cb(4),o.jc("ngModel",e.data.author),o.Cb(4),o.jc("ngModel",e.data.publisher),o.Cb(4),o.jc("ngModel",e.data.year),o.Cb(4),o.jc("ngModel",e.data.isbn),o.Cb(4),o.jc("ngModel",e.data.price),o.Cb(4),o.jc("disabled",e.loading),o.Cb(1),o.yc(e.loading?"Menyimpan...":"Simpan"))},directives:[T.h,T.e,S.b,S.e,k.b,v.c,v.i,v.k,v.l,T.c,b.a,T.d],styles:[""]}),t})();var y=a("Xa2L"),C=a("Wp6s");function M(t,e){1&t&&(o.Tb(0,"div",2),o.Ob(1,"mat-spinner"),o.Sb())}function j(t,e){if(1&t){const t=o.Ub();o.Tb(0,"button",12),o.ac("click",function(){o.qc(t);const e=o.ec().$implicit;return o.ec(2).downloadFile(e)}),o.Tb(1,"mat-icon"),o.xc(2,"download"),o.Sb(),o.Sb()}}function O(t,e){if(1&t){const t=o.Ub();o.Tb(0,"tr"),o.Tb(1,"td"),o.wc(2,j,3,0,"button",9),o.Sb(),o.Tb(3,"td"),o.xc(4),o.Sb(),o.Tb(5,"td"),o.xc(6),o.Sb(),o.Tb(7,"td"),o.xc(8),o.Sb(),o.Tb(9,"td"),o.xc(10),o.Sb(),o.Tb(11,"td"),o.xc(12),o.Sb(),o.Tb(13,"td"),o.xc(14),o.Sb(),o.Tb(15,"td",7),o.Tb(16,"button",10),o.ac("click",function(){o.qc(t);const a=e.$implicit;return o.ec(2).uploadFile(a)}),o.xc(17,"Upload"),o.Sb(),o.Tb(18,"button",10),o.ac("click",function(){o.qc(t);const a=e.$implicit,n=e.index;return o.ec(2).productDetail(a,n)}),o.xc(19,"Edit"),o.Sb(),o.Tb(20,"button",11),o.ac("click",function(){o.qc(t);const a=e.$implicit,n=e.index;return o.ec(2).deleteProduct(a.id,n)}),o.xc(21),o.Sb(),o.Sb(),o.Sb()}if(2&t){const t=e.$implicit,a=e.index,n=o.ec(2);o.Cb(2),o.jc("ngIf",""!=t.url),o.Cb(2),o.yc(a+1),o.Cb(2),o.yc(t.title),o.Cb(2),o.yc(t.author),o.Cb(2),o.yc(t.publisher),o.Cb(2),o.yc(t.year),o.Cb(2),o.yc(t.price),o.Cb(6),o.jc("disabled",n.loadingDelete[a]),o.Cb(1),o.yc(n.loadingDelete[a]?"Deleting...":"Delete")}}function I(t,e){if(1&t){const t=o.Ub();o.Tb(0,"mat-card"),o.Tb(1,"mat-card-header"),o.Tb(2,"mat-card-title"),o.xc(3),o.Sb(),o.Sb(),o.Tb(4,"mat-card-content"),o.Tb(5,"div",3),o.Ob(6,"span",4),o.Tb(7,"button",5),o.ac("click",function(){return o.qc(t),o.ec().productDetail({},-1)}),o.xc(8,"Tambah Produk"),o.Sb(),o.Sb(),o.Tb(9,"table",6),o.Tb(10,"thead"),o.Ob(11,"th"),o.Tb(12,"th"),o.xc(13,"No"),o.Sb(),o.Tb(14,"th"),o.xc(15,"Judul"),o.Sb(),o.Tb(16,"th"),o.xc(17,"Penulis"),o.Sb(),o.Tb(18,"th"),o.xc(19,"Penerbit"),o.Sb(),o.Tb(20,"th"),o.xc(21,"Tahun Terbit"),o.Sb(),o.Tb(22,"th"),o.xc(23,"ISBN"),o.Sb(),o.Tb(24,"th"),o.xc(25,"Harga"),o.Sb(),o.Tb(26,"th",7),o.xc(27,"#"),o.Sb(),o.Sb(),o.Tb(28,"tbody"),o.wc(29,O,22,9,"tr",8),o.Sb(),o.Sb(),o.Sb(),o.Sb()}if(2&t){const t=o.ec();o.Cb(3),o.yc(t.title),o.Cb(26),o.jc("ngForOf",t.books)}}const D=[{path:"",component:p,children:[{path:"dashboard",component:f},{path:"product",component:(()=>{class t{constructor(t,e){this.dialog=t,this.api=e,this.book={},this.books=[],this.loadingDelete={},this.title="Product",this.getBooks()}ngOnInit(){}getBooks(){this.loading=!0,this.api.get("bookswithauth").subscribe(t=>{this.books=t,this.loading=!1},t=>{this.loading=!1,alert("Ada masalah saat pengambilan data. Coba lagi!")})}productDetail(t,e){this.dialog.open(w,{width:"400px",data:t}).afterClosed().subscribe(a=>{a&&(-1==e?this.books.push(a):this.books[e]=t)})}deleteProduct(t,e){confirm("Delete item?")&&(this.loadingDelete[e]=!0,this.api.delete("books/"+t).subscribe(t=>{this.books.splice(e,1),this.loadingDelete[e]=!1},t=>{this.loadingDelete[e]=!1,alert("Tidak dapat menghapus data")}))}uploadFile(t){this.dialog.open(x,{width:"400px",data:t}).afterClosed().subscribe(t=>{})}downloadFile(t){m.saveAs("http://api.sunhouse.co.id/bookstore/"+t.url)}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(T.b),o.Nb(i.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-product"]],decls:2,vars:2,consts:[["style","height: 300px;","class","uk-flex-center uk-flex-middle",4,"ngIf"],[4,"ngIf"],[1,"uk-flex-center","uk-flex-middle",2,"height","300px"],[1,"uk-flex"],[1,"uk-width-expand"],["mat-flat-button","","color","primary",3,"click"],[1,"uk-table","uk-table-middle","uk-table-divider"],["align","right"],[4,"ngFor","ngForOf"],["mat-icon-button","",3,"click",4,"ngIf"],["mat-button","","color","primary",3,"click"],["mat-button","","color","warn",3,"disabled","click"],["mat-icon-button","",3,"click"]],template:function(t,e){1&t&&(o.wc(0,M,2,0,"div",0),o.wc(1,I,30,2,"mat-card",1)),2&t&&(o.jc("ngIf",e.loading),o.Cb(1),o.jc("ngIf",!e.loading))},directives:[n.k,y.b,C.a,C.c,C.e,C.b,b.a,n.j,s.a],styles:[""]}),t})()},{path:"",redirectTo:"admin/dashboard",pathMatch:"full"},{path:"gallery",component:h}]}];let F=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({imports:[[n.c,c.c.forChild(D),g.a,v.e]]}),t})()}}]);