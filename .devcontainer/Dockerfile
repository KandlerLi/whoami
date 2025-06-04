FROM debian:testing-slim

# Install base packages
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
    && apt-get clean

# Generate locale
RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen && \
    locale-gen

# Create non-root user
RUN useradd -m -s /bin/zsh vscode && \
    echo "vscode ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Install Meslo Nerd Font for Powerlevel10k
RUN mkdir -p /usr/share/fonts/truetype/meslo && \
    wget -O "/usr/share/fonts/truetype/meslo/MesloLGS NF Regular.ttf" \
    https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf

USER vscode

# Install brew
RUN /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
RUN (echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> /home/vscode/.zshrc
RUN eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
ENV PATH="/home/linuxbrew/.linuxbrew/bin:${PATH}"
RUN brew install tfenv

# Install Oh My Zsh (unattended)
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended

# Clone plugins and theme into Oh My Zsh custom directory
RUN git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions && \
    git clone https://github.com/zsh-users/zsh-syntax-highlighting ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting && \
    git clone https://github.com/romkatv/powerlevel10k.git ~/.oh-my-zsh/custom/themes/powerlevel10k && \
    git clone https://github.com/djui/alias-tips.git ~/.oh-my-zsh/custom/plugins/alias-tips

# Copy user configs
COPY .p10k.zsh /home/vscode/
COPY .zshrc /home/vscode/

WORKDIR /home/vscode 