#
# Copyright (C) 2015-2016 OpenWrt.org
# Copyright (C) 2020 jjm2473@gmail.com
#
# This is free software, licensed under the GNU General Public License v3.
#

include $(TOPDIR)/rules.mk

PKG_ARCH_routergo:=$(ARCH)

PKG_NAME:=routergo
PKG_VERSION:=0.14.4
PKG_RELEASE:=
PKG_SOURCE:=$(PKG_NAME)-binary-$(PKG_VERSION).tar.gz
PKG_SOURCE_URL:=https://github.com/Carseason/openwrt-packages/releases/download/prebuilt/
PKG_HASH:=cc4ebb9eb9d0b0fbd3ff9182c73c89ce4d2d3de2cf99df0c0b91bf90526623b1
PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)-binary-$(PKG_VERSION)

PKG_BUILD_PARALLEL:=1
PKG_USE_MIPS16:=0

include $(INCLUDE_DIR)/package.mk

define Package/$(PKG_NAME)
	SECTION:=net
	CATEGORY:=Network
	SUBMENU:=Web Servers/Proxies
	TITLE:=RouterGo
	DEPENDS:=@(x86_64||aarch64||arm) +docker
	URL:=https://github.com/Carseason/openwrt-packages
endef

define Package/$(PKG_NAME)/description
  RouterGo is a dashboard & user guide
endef

define Package/$(PKG_NAME)/conffiles
/etc/config/routergo
endef

define Package/$(PKG_NAME)/postinst
#!/bin/sh
if [ -z "$${IPKG_INSTROOT}" ]; then
	if [ -f /etc/uci-defaults/09-routergo ]; then
		chmod 755 /etc/uci-defaults/09-routergo
		/etc/uci-defaults/09-routergo && rm -f /etc/uci-defaults/09-routergo
	fi
fi
endef

define Build/Configure
endef

define Build/Compile
endef

define Package/$(PKG_NAME)/install
	$(INSTALL_DIR) $(1)/usr/sbin $(1)/etc/init.d $(1)/etc/uci-defaults $(1)/etc/config
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/routergo.$(PKG_ARCH_routergo) $(1)/usr/sbin/routergo
	$(INSTALL_BIN) ./files/routergo.init $(1)/etc/init.d/routergo
	$(INSTALL_BIN) ./files/routergo.uci-default $(1)/etc/uci-defaults/09-routergo
	$(INSTALL_CONF) ./files/routergo.config $(1)/etc/config/routergo
endef

$(eval $(call BuildPackage,$(PKG_NAME)))
