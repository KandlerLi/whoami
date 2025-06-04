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
    zsh-syntax-highlighting \
    && apt-get clean

RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen && \
    locale-gen
    
RUN useradd -m -s /bin/bash vscode && \
    echo "vscode ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers


RUN mkdir -p /usr/share/fonts/truetype/meslo && \
    wget -O "/usr/share/fonts/truetype/meslo/MesloLGS NF Regular.ttf" \
    https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf

USER vscode

RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
RUN /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
RUN (echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> /home/vscode/.zshrc
RUN eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
ENV PATH="/home/linuxbrew/.linuxbrew/bin:${PATH}"

RUN git clone https://github.com/djui/alias-tips.git home/vscode/.oh-my-zsh/plugins/alias-tips

RUN brew install tfenv powerlevel10k zsh-autosuggestions

COPY .p10k.zsh /home/vscode/
COPY .zshrc /home/vscode/

WORKDIR /home/vscode 