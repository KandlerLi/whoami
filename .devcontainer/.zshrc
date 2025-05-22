if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

plugins=(git)

source $ZSH/oh-my-zsh.sh

source /home/linuxbrew/.linuxbrew/share/powerlevel10k/powerlevel10k.zsh-theme

eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

ZSH_THEME="powerlevel10k/powerlevel10k"