Object.defineProperty(exports, "__esModule", {
  value: true,
});
let ejs = require("../../../node_modules/ejs/ejs");

//added new function by linoy
exports.default = function (ctx) {
  debugger;
  // let str = `<nav aria-label="navigation" id="<%= ctx.wizardKey %>-header">
  //               <ol class="pagination">
  //                 <%  ctx.panels.forEach(function(panel, index) { %>
  //                       <li class="page-item<%= ctx.currentPage === index ? ' active' : ''%>" style="">
  //                         <span class="page-link" ref="<%= ctx.wizardKey %>-link"> <%= ctx.t(panel.title) %> </span>
  //                       </li>
  //                   <% }) %>
  //               </ol>
  //             </nav>`;

  // let str = `<nav aria-label="breadcrumb" id="<%= ctx.wizardKey %>-header">
  //               <ol class="breadcrumb">
  //                 <%  ctx.panels.forEach(function(panel, index) { %>
  //                       <li class="breadcrumb-item page-item<%= ctx.currentPage === index ? ' active' : ''%>" style="">
  //                         <a href="#" ref="<%= ctx.wizardKey %>-link"> <%= ctx.t(panel.title) %> </a>
  //                       </li>
  //                   <% }) %>
  //               </ol>
  //             </nav>`;

    // let str = `<nav aria-label="breadcrumb" id="<%= ctx.wizardKey %>-header">
    //             <div class="row">
    //             <ul class="breadcrumbs">
    //               <%  ctx.panels.forEach(function(panel, index) { %>
    //                     <li class="page-item<%= ctx.currentPage === index ? ' active' : ''%>" style="">
    //                       <a href="#" ref="<%= ctx.wizardKey %>-link"> <%= ctx.t(panel.title) %> </a>
    //                     </li>
    //                 <% }) %>
    //             </ul>
    //             <span>
    //             <style>
    //             * {
    //               -webkit-backface-vibisility: hidden;
    //                 -moz-backface-vibisility: hidden;
    //                   -ms-backface-vibisility: hidden;
    //                       backface-vibisility: hidden;
    //             }

    //             .breadcrumbs {
    //               list-style: none;
    //               margin: 0;
    //               padding: 0;
    //             }

    //             .breadcrumbs li {
    //               list-style: none;
    //               margin: 0;
    //               padding: 0;
    //               display: block;
    //               float: left;
    //               font-family: Helvetica Neue,sans-serif;
    //               font-size: 13px;
    //               text-transform: uppercase;
    //               font-weight: 700;
    //               letter-spacing: .05em;
    //               line-height: 20px;
    //               color: hsl(0, 0%, 30%);
    //             }

    //             .breadcrumbs li a {
    //               display: block;
    //               padding: 0 40px 0 0px;
    //               color: hsl(0, 0%, 30%);
    //               text-decoration: none;
    //               height: 20px;
    //               position: relative;
    //               perspective: 700px;
    //             }

    //             .breadcrumbs li a:after {
    //               content: '';
    //               width: 20px;
    //               height: 20px;
    //               border-color: #333;
    //               border-style: solid;
    //               border-width: 1px 1px 0 0;
                  
    //               -webkit-backface-visibility: hidden;
    //               outline: 1px solid transparent;
                  
    //               position: absolute;
    //               right: 20px;
    //               -webkit-transition: all .15s ease;
    //                 -moz-transition: all .15s ease;
    //                   -ms-transition: all .15s ease;
    //                       transition: all .15s ease;
    //               -webkit-transform: rotateZ(45deg) skew(10deg, 10deg);
    //                 -moz-transform: rotateZ(45deg) skew(10deg, 10deg);
    //                   -ms-transform: rotateZ(45deg) skew(10deg, 10deg);
    //                       transform: rotateZ(45deg) skew(10deg, 10deg);
    //             }


    //             .breadcrumbs li a:hover:after {
    //               right: 15px;
    //               -webkit-transform: rotateZ(45deg) skew(-10deg, -10deg);
    //                 -moz-transform: rotateZ(45deg) skew(-10deg, -10deg);
    //                   -ms-transform: rotateZ(45deg) skew(-10deg, -10deg);
    //                       transform: rotateZ(45deg) skew(-10deg, -10deg);
    //             }
    //             </style>
    //             </span>
    //             </div>
    //           </nav>`;

let str =  ctx.form.breadCrumbstemplate;

  let html = ejs.render(str, { ctx: ctx });
  return html;
};


// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// exports.default=function(ctx) {
// var __t, __p = '', __j = Array.prototype.join;
// function print() { __p += __j.call(arguments, '') }
// __p += '<nav aria-label="navigation" id="' +
// ((__t = ( ctx.wizardKey )) == null ? '' : __t) +
// '-header">\n  <ul class="pagination">\n    ';
//  ctx.panels.forEach(function(panel, index) { ;
// __p += '\n    <li class="page-item' +
// ((__t = (ctx.currentPage === index ? ' active' : '')) == null ? '' : __t) +
// '" style="">\n      <span class="page-link" ref="' +
// ((__t = (ctx.wizardKey)) == null ? '' : __t) +
// '-link">' +
// ((__t = (ctx.t(panel.title))) == null ? '' : __t) +
// '</span>\n    </li>\n    ';
//  }) ;
// __p += '\n  </ul>\n</nav>\n';
// return __p
// }