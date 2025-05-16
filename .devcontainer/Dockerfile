FROM debian:testing

RUN apt-get update && apt-get install -y \
    curl \
    git \
    sudo \
    locales \
    vim \
    && apt-get clean

RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen && \
    locale-gen
    
RUN useradd -m -s /bin/bash vscode && \
    echo "vscode ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

USER vscode
WORKDIR /home/vscode