# -*- mode: ruby -*-
# vi: set ft=ruby :
# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANT_API_VERSION = "2"
Vagrant.configure(VAGRANT_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"

  # Provision using shell
  config.vm.host_name = "dev.mock-api"
  config.vm.synced_folder ".", "/opt/mock-api"
  config.vm.provision "shell", path: "./vagrant-provision"

  # Networking details
  config.vm.network "private_network", ip: "172.28.128.6"
end

