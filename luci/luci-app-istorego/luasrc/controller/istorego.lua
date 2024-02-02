local http = require "luci.http"

module("luci.controller.istorego", package.seeall)

function index()
    entry({"admin", "istorego"}, call("istorego_index"), _("iStoreGo"), 30).leaf = true
end

function istorego_index()
    luci.template.render("istorego/main", {
        prefix=luci.dispatcher.build_url(unpack({"admin", "istorego"}))
    })
end