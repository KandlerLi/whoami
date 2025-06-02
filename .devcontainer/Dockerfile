FROM debian:testing-slim

RUN apt-get update && apt-get install -y \
    awscli \
    build-essential \
    curl \
    eza \
    git \
    locales \
    npm \
    sudo \
    vim \
    wget \
    zsh \
    procps \
#    zip \
    zsh-syntax-highlighting \
    && apt-get clean

RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen && \
    locale-gen
    
RUN useradd -m -s /bin/bash vscode && \
    echo "vscode ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers


RUN mkdir -p /usr/share/fonts/truetype/meslo && \
    wget -O "/usr/share/fonts/truetype/meslo/MesloLGS NF Regular.ttf" \
    https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf

RUN wget -O zsh-autosuggestions.deb https://download.opensuse.org/repositories/shells:/zsh-users:/zsh-autosuggestions/Debian_Testing/amd64/zsh-autosuggestions_0.7.0-1+3.401_amd64.deb && \
    apt install ./zsh-autosuggestions.deb

USER vscode

RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
RUN /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
RUN (echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> /home/vscode/.zshrc
RUN eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
ENV PATH="/home/linuxbrew/.linuxbrew/bin:${PATH}"

RUN git clone https://github.com/djui/alias-tips.git home/vscode/.oh-my-zsh/plugins/alias-tips

#RUN wget -O /home/vscode/.oh-my-zsh/plugins/alias-tips.zip https://github.com/djui/alias-tips/archive/master.zip 
#RUN unzip -o /home/vscode/.oh-my-zsh/plugins/alias-tips.zip
#    mv /home/vscode/.oh-my-zsh/plugins/alias-tips-master /home/vscode/.oh-my-zsh/plugins/alias-tips
#    rm /home/vscode/.oh-my-zsh/plugins/alias-tips.zip

RUN brew install tfenv powerlevel10k

COPY .p10k.zsh /home/vscode/
COPY .zshrc /home/vscode/

WORKDIR /home/vscode 