#
# Copyright (C) 2015-2016 OpenWrt.org
# Copyright (C) 2020 jjm2473@gmail.com
#
# This is free software, licensed under the GNU General Public License v3.
#

include $(TOPDIR)/rules.mk

PKG_ARCH_istorego:=$(ARCH)

PKG_NAME:=istorego
PKG_VERSION:=0.0.5
PKG_RELEASE:=1
PKG_SOURCE:=$(PKG_NAME)-binary-$(PKG_VERSION).tar.gz
PKG_SOURCE_URL:=https://github.com/Carseason/openwrt-packages/releases/download/prebuilt/
PKG_HASH:=c61f54b8976a0e1e2176c0e76668533343aa73643fa8d8154415e346e6ddc7ce
PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)-binary-$(PKG_VERSION)

PKG_BUILD_PARALLEL:=1
PKG_USE_MIPS16:=0

include $(INCLUDE_DIR)/package.mk

define Package/$(PKG_NAME)
	SECTION:=net
	CATEGORY:=Network
	SUBMENU:=Web Servers/Proxies
	TITLE:=iStoreGo
	URL:=https://github.com/Carseason/openwrt-packages
endef

define Package/$(PKG_NAME)/description
  iStoreGo is a dashboard & user guide
endef

define Package/$(PKG_NAME)/conffiles
/etc/config/istorego
endef

define Package/$(PKG_NAME)/postinst
#!/bin/sh
if [ -z "$${IPKG_INSTROOT}" ]; then
	if [ -f /etc/uci-defaults/09-istorego ]; then
		chmod 755 /etc/uci-defaults/09-istorego
		/etc/uci-defaults/09-istorego && rm -f /etc/uci-defaults/09-istorego
	fi
fi
endef

define Build/Configure
endef

define Build/Compile
endef

define Package/$(PKG_NAME)/install
	$(INSTALL_DIR) $(1)/usr/sbin $(1)/etc/init.d $(1)/etc/uci-defaults $(1)/etc/hotplug.d/block $(1)/etc/config
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/istorego.$(PKG_ARCH_istorego) $(1)/usr/sbin/istorego
	$(INSTALL_BIN) ./files/istorego.init $(1)/etc/init.d/istorego
	$(INSTALL_BIN) ./files/istorego.uci-default $(1)/etc/uci-defaults/09-istorego
	$(INSTALL_BIN) ./files/istorego.hotplug $(1)/etc/hotplug.d/block/09-istorego
	$(INSTALL_CONF) ./files/istorego.config $(1)/etc/config/istorego
endef

$(eval $(call BuildPackage,$(PKG_NAME)))
