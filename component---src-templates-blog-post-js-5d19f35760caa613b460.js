(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{217:function(t,e,A){"use strict";A.r(e);A(18);var a=A(12),n=A.n(a),r=A(1),i=A.n(r),o=A(42),l=(A(221),A(222)),c=A(220),s=A.n(c),p=A(223),d=A.n(p),f=A(224),g=A.n(f);g.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete g.a.googleFonts;var m=new d.a(g.a);var E=m.rhythm,u=m.scale;var h="4007731267",w=function(){return i.a.createElement(o.b,{query:h,render:function(t){var e=t.site.siteMetadata,A=e.author,a=e.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:E(2.5)}},i.a.createElement(s.a,{fixed:t.avatar.childImageSharp.fixed,alt:A,style:{marginRight:E(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,A)," who lives and works in San Francisco building useful things."," ",i.a.createElement("a",{href:"https://twitter.com/"+a.twitter},"You should follow him on Twitter")))},data:l})},y=A(219);A.d(e,"pageQuery",function(){return Q});var B=function(t){function e(){return t.apply(this,arguments)||this}return n()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.pageContext,A=e.previous,a=e.next;return i.a.createElement("div",null,i.a.createElement(y.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),i.a.createElement("h1",null,t.frontmatter.title),i.a.createElement("p",{style:Object.assign({},u(-.2),{display:"block",marginBottom:E(1),marginTop:E(-1)})},t.frontmatter.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),i.a.createElement("hr",{style:{marginBottom:E(1)}}),i.a.createElement(w,null),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,A&&i.a.createElement(o.a,{to:A.fields.slug,rel:"prev"},"← ",A.frontmatter.title)),i.a.createElement("li",null,a&&i.a.createElement(o.a,{to:a.fields.slug,rel:"next"},a.frontmatter.title," →"))))},e}(i.a.Component),Q=(e.default=B,"3654438753")},218:function(t){t.exports={data:{site:{siteMetadata:{title:"Guy's personal site",description:"Personal site by Guy Livni.",author:"Guy Livni"}}}}},219:function(t,e,A){"use strict";var a=A(218),n=A(1),r=A.n(n),i=A(3),o=A.n(i),l=A(73),c=A.n(l);function s(t){var e=t.description,A=t.lang,n=t.meta,i=t.keywords,o=t.title,l=a.data.site,s=e||l.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:A},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired};var p=s;e.a=p},222:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAFwEBAQEBAAAAAAAAAAAAAAAAAQMCBP/aAAwDAQACEAMQAAABz3cQOxIz5FZ0F4jX/8QAGxABAAMAAwEAAAAAAAAAAAAAAgABAwQSEzH/2gAIAQEAAQUCWDMGWbdcXSomTafWzWapfJ7IT//EABkRAAIDAQAAAAAAAAAAAAAAAAERAAIQIf/aAAgBAwEBPwEJbUcn/8QAGREAAQUAAAAAAAAAAAAAAAAAAAECEBIx/9oACAECAQE/AarLtP/EAB4QAAICAQUBAAAAAAAAAAAAAAERAAJREBIxQVJh/9oACAEBAAY/ArNEDE2g2+sTkQqveZ6jdtBEFP/EABwQAQACAwADAAAAAAAAAAAAAAEAESExQVFhkf/aAAgBAQABPyFixcGARrcAVFfMwcsvfggjeD4Uag0fVmpl2w8+9k//2gAMAwEAAgADAAAAELPfgf/EABkRAQACAwAAAAAAAAAAAAAAAAEAERAhMf/aAAgBAwEBPxBWYesCmp//xAAZEQEAAwEBAAAAAAAAAAAAAAABACExEXH/2gAIAQIBAT8QsK2IDxhh4R3n/8QAHhABAQADAAEFAAAAAAAAAAAAAREAITFBUWFxkfD/2gAIAQEAAT8QL0AdnZSH7uKoKLUNVLqY0lH1NfWNHSNKUnh3oz5agV4bGXC6h8SnthgO2YITxcbObervP//Z",width:50,height:50,src:"/static/f5187dca70feaa6262f5795f180cc522/7e494/guy-profile-pic.jpg",srcSet:"/static/f5187dca70feaa6262f5795f180cc522/7e494/guy-profile-pic.jpg 1x,\n/static/f5187dca70feaa6262f5795f180cc522/36cc2/guy-profile-pic.jpg 1.5x,\n/static/f5187dca70feaa6262f5795f180cc522/0a3a6/guy-profile-pic.jpg 2x,\n/static/f5187dca70feaa6262f5795f180cc522/75d16/guy-profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Guy Livni",social:{twitter:"https://twitter.com/guy_livni"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-5d19f35760caa613b460.js.map