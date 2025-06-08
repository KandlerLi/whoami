if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

ZSH_THEME="powerlevel10k/powerlevel10k"

plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
  alias-tips
)

export PATH="$HOME/.npm-global/bin:$PATH"

ZSH=~/.oh-my-zsh
source $ZSH/oh-my-zsh.sh