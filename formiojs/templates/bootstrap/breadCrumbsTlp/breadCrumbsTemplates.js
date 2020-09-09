Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default=function(ctx) {

    var predefinedTemplates = { bootrapTpl : `<nav aria-label="breadcrumb" id="<%= ctx.wizardKey %>-header">
                                                <ol class="breadcrumb">
                                                <%  ctx.panels.forEach(function(panel, index) { %>
                                                        <li class="breadcrumb-item page-item<%= ctx.currentPage === index ? ' active' : ''%>" style="">
                                                        <a href="#" ref="<%= ctx.wizardKey %>-link"> <%= ctx.t(panel.title) %> </a>
                                                        </li>
                                                    <% }) %>
                                                </ol>
                                                </nav>`,
                                defaultTpl : `<nav aria-label="navigation" id="<%= ctx.wizardKey %>-header">
                                                <ol class="pagination">
                                                <%  ctx.panels.forEach(function(panel, index) { %>
                                                        <li class="page-item<%= ctx.currentPage === index ? ' active' : ''%>" style="">
                                                        <span class="page-link" ref="<%= ctx.wizardKey %>-link"> <%= ctx.t(panel.title) %> </span>
                                                        </li>
                                                    <% }) %>
                                                </ol>
                                            </nav>`
      }
  return predefinedTemplates;
  }