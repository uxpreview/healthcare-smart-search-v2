/* === [System] — main App === */
const Icon = window.Icon;
const Message = window.AlmaMessage;
const { useState: useS, useEffect: useE, useRef: useR, useCallback } = React;

/* Quick-action chips below the input */
const QUICK_CHIPS = [
{ icon: 'BookOpen', text: 'Appointment Navigator', query: 'Find a primary care doctor near me' },
{ icon: 'FileText', text: 'Symptom Checker', query: 'What causes lower back pain?' },
{ icon: 'ShieldCheck', text: 'Health Evaluation', query: 'Does my plan cover physical therapy?' },
{ icon: 'StethY', text: 'Physician Finder', query: 'Find a primary care doctor near me' }];


/* Primary nav (the "categories" of search) */
const PRIMARY_NAV = [
{ id: 'find-care', icon: 'Stethoscope', label: 'Find care', kind: 'agent' },
{ id: 'check-symptoms', icon: 'Clipboard', label: 'Check symptoms', kind: 'agent' },
{ id: 'schedule', icon: 'Calendar', label: 'Schedule appointment', kind: 'agent', requiresAuth: true, promo: { title: 'Save your slot in one chat', desc: 'Sign in to book, reschedule, and sync visits to your calendar.' } },
{ id: 'ask-anything', icon: 'Alert', label: 'Urgent care', kind: 'home' }];


/* Recent chats — every entry maps to one of our existing result flows */
const HISTORY = [
{ id: 'h1', q: 'Urgent care open right now',           query: 'Urgent care open right now' },
{ id: 'h2', q: 'Chest pain and shortness of breath',   query: 'Chest pain and shortness of breath' },
{ id: 'h3', q: 'Primary care options near me',         query: 'Find a primary care doctor near me' },
{ id: 'h4', q: 'Colonoscopy prep timeline',            query: 'How do I prepare for a colonoscopy?' },
{ id: 'h5', q: 'Physical therapy coverage',            query: 'Does my plan cover physical therapy?' }];


/* === Input bar === */
function InputBar({ value, onChange, onSubmit, large, placeholder, autoFocus }) {
  const ta = useR(null);
  useE(() => {
    if (ta.current) {
      ta.current.style.height = 'auto';
      ta.current.style.height = Math.min(ta.current.scrollHeight, 180) + 'px';
    }
  }, [value]);
  useE(() => {if (autoFocus && ta.current) ta.current.focus();}, [autoFocus]);

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) onSubmit(value.trim());
    }
  };
  return (
    <div className={'input-shell' + (large ? ' input-shell--large' : '')}>
      <textarea
        ref={ta}
        className="input__textarea"
        placeholder={placeholder || 'Ask about a symptom, doctor, or visit type…'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKey}
        rows={1} />
      
      <div className="input__row">
        <div className="input__tools">
          <button className="icon-btn" title="Add">{Icon.Plus()}</button>
          <button className="icon-btn" title="Photo">{Icon.Image()}</button>
          <button className="icon-btn" title="Voice">{Icon.Mic()}</button>
        </div>
        <div className="input__right">
          <button className="input__mode" title="Mode">
            <span>Fast</span>
            <span className="input__mode-caret">{Icon.ChevronDown()}</span>
          </button>
          <button
            className="input__send"
            disabled={!value.trim()}
            onClick={() => value.trim() && onSubmit(value.trim())}
            title="Send">
            {Icon.ArrowUp()}
          </button>
        </div>
      </div>
    </div>);

}

/* === Landing state === */
function Landing({ onAsk, draft, setDraft, loggedIn, onSignIn }) {
  return (
    <div className="landing fade-in">
      {!loggedIn &&
      <button className="landing__banner" onClick={onSignIn}>
          <span className="landing__banner-icon">{Icon.Sparkle()}</span>
          <span className="landing__banner-text">
            <strong>Log in</strong> for personalized care recommendations and saved chats.
          </span>
          <span className="landing__banner-arrow">{Icon.ArrowRight()}</span>
        </button>
      }
      <h1 className="landing__title">How can we help you feel better?</h1>
      <div className="landing__input">
        <InputBar
          value={draft}
          onChange={setDraft}
          onSubmit={onAsk}
          large
          autoFocus
          placeholder="Ask about a symptom, doctor, or visit type…" />
        
      </div>
      <div className="quick-chips">
        {QUICK_CHIPS.filter((c) => loggedIn || c.text !== 'Appointment Navigator').map((c, i) =>
        <button key={i} className="quick-chip" onClick={() => onAsk(c.query)}>
            <span className="quick-chip__icon">{Icon[c.icon]()}</span>
            <span>{c.text}</span>
          </button>
        )}
      </div>
    </div>);

}

function AlmaMark() {
  // Simple original mark — soft asterisk / plus hybrid
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M16 6 v20 M6 16 h20 M9.5 9.5 l13 13 M22.5 9.5 l-13 13" opacity="0.9" />
    </svg>);

}

/* === Auth modal — appears for "Log in" / "Sign up" === */
const GoogleG = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path fill="#4285F4" d="M21.6 12.23c0-.7-.06-1.22-.2-1.77H12v3.21h5.5c-.11.83-.71 2.07-2.04 2.91l-.02.12 2.96 2.3.2.02c1.88-1.74 2.97-4.29 2.97-7.31"/>
    <path fill="#34A853" d="M12 21.6c2.7 0 4.96-.89 6.6-2.41l-3.15-2.44c-.84.59-1.97 1-3.45 1-2.64 0-4.88-1.74-5.68-4.14l-.12.01-3.08 2.38-.04.11C4.72 19.39 8.08 21.6 12 21.6"/>
    <path fill="#FBBC04" d="M6.32 13.61A5.95 5.95 0 0 1 6 12c0-.56.1-1.1.31-1.6L6.3 10.27 3.18 7.85l-.1.05A9.59 9.59 0 0 0 2.4 12c0 1.55.37 3.02 1.03 4.32l3.08-2.38"/>
    <path fill="#EA4335" d="M12 5.86c1.88 0 3.14.81 3.86 1.49l2.82-2.75C16.96 3.04 14.7 2.4 12 2.4 8.08 2.4 4.72 4.61 3.08 7.85l3.23 2.45C7.12 8.16 9.36 5.86 12 5.86"/>
  </svg>
);

const AppleLogo = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M17.07 12.41c-.03-2.51 2.05-3.72 2.14-3.78-1.17-1.71-2.99-1.94-3.63-1.97-1.55-.16-3.02.91-3.81.91-.79 0-2-.89-3.29-.86-1.69.03-3.25.98-4.12 2.5-1.76 3.05-.45 7.57 1.27 10.05.84 1.21 1.84 2.57 3.15 2.52 1.27-.05 1.75-.82 3.28-.82s1.96.82 3.3.79c1.36-.02 2.22-1.23 3.05-2.45.96-1.41 1.36-2.78 1.38-2.85-.03-.01-2.65-1.01-2.68-4.04zM14.7 5.07c.69-.84 1.16-2 1.03-3.16-1 .04-2.22.67-2.93 1.5-.64.74-1.2 1.93-1.05 3.06 1.12.09 2.26-.57 2.95-1.4z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

function AuthModal({ open, onClose, onComplete }) {
  const [email, setEmail] = React.useState('');
  const [mode, setMode] = React.useState('default'); // 'default' | 'sso'
  const [ssoDomain, setSsoDomain] = React.useState('');

  React.useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  React.useEffect(() => { if (!open) { setEmail(''); setMode('default'); setSsoDomain(''); } }, [open]);

  if (!open) return null;

  const finish = () => onComplete();
  const emailValid = /\S+@\S+\.\S+/.test(email.trim());

  return (
    <div className="auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title" onClick={onClose}>
      <div className="auth-modal__card" onClick={(e) => e.stopPropagation()}>
        <button className="auth-modal__close" onClick={onClose} aria-label="Close">{Icon.X()}</button>
        {mode === 'default' && (
          <>
            <h2 className="auth-modal__title" id="auth-modal-title">Log in or sign up</h2>
            <p className="auth-modal__sub">You'll get smarter responses and can save chats, sync your care profile, and schedule visits.</p>
            <div className="auth-modal__providers">
              <button className="auth-provider" onClick={finish}>
                <span className="auth-provider__icon"><GoogleG /></span>
                <span>Continue with Google</span>
              </button>
              <button className="auth-provider" onClick={finish}>
                <span className="auth-provider__icon"><AppleLogo /></span>
                <span>Continue with Apple</span>
              </button>
              <button className="auth-provider" onClick={finish}>
                <span className="auth-provider__icon"><PhoneIcon /></span>
                <span>Continue with phone</span>
              </button>
            </div>
            <div className="auth-modal__divider"><span>OR</span></div>
            <form className="auth-modal__email" onSubmit={(e) => { e.preventDefault(); if (emailValid) finish(); }}>
              <input
                type="email"
                className="auth-modal__input"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <button
                type="submit"
                className="auth-modal__continue"
                disabled={!emailValid}>
                Continue
              </button>
            </form>
            <button className="auth-modal__sso" onClick={() => setMode('sso')}>
              Single sign-on (SSO)
            </button>
            <div className="auth-modal__legal">
              By continuing, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
            </div>
          </>
        )}
        {mode === 'sso' && (
          <>
            <button className="auth-modal__back" onClick={() => setMode('default')} aria-label="Back">←</button>
            <h2 className="auth-modal__title">Single sign-on</h2>
            <p className="auth-modal__sub">Enter your organization's SSO domain to continue.</p>
            <form className="auth-modal__email" onSubmit={(e) => { e.preventDefault(); if (ssoDomain.trim()) finish(); }}>
              <input
                type="text"
                className="auth-modal__input"
                placeholder="company.com"
                value={ssoDomain}
                onChange={(e) => setSsoDomain(e.target.value)}
                autoFocus
              />
              <button
                type="submit"
                className="auth-modal__continue"
                disabled={!ssoDomain.trim()}>
                Continue with SSO
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* Locked rail item — disabled state + hover promo card prompting sign-in */
function RailLockedItem({ icon, label, title, desc, onSignIn }) {
  const [hover, setHover] = React.useState(false);
  const [pos, setPos] = React.useState({ top: 0, left: 0 });
  const ref = React.useRef(null);
  const timer = React.useRef(null);
  const show = () => {
    clearTimeout(timer.current);
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      setPos({ top: r.top, left: r.right + 6 });
    }
    setHover(true);
  };
  const hide = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setHover(false), 120);
  };
  React.useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <div className="rail__locked"
         ref={ref}
         onMouseEnter={show}
         onMouseLeave={hide}
         onFocus={show}
         onBlur={hide}>
      <div className={'rail__item rail__item--locked' + (hover ? ' rail__item--locked-hover' : '')} aria-disabled="true" tabIndex={0}>
        <span className="rail__item-icon">{Icon[icon]()}</span>
        <span>{label}</span>
        <span className="rail__item-trail rail__item-trail--lock">{Icon.Lock()}</span>
      </div>
      {hover && (
        <div className="rail__promo"
             role="tooltip"
             onMouseEnter={show}
             onMouseLeave={hide}
             style={{ top: pos.top, left: pos.left }}>
          <div className="rail__promo-title">{title}</div>
          <div className="rail__promo-desc">{desc}</div>
          <button
            className="rail__promo-btn"
            onClick={(e) => { e.stopPropagation(); onSignIn && onSignIn(); }}>
            Sign up
          </button>
        </div>
      )}
    </div>);

}

/* === Left rail === */
function LeftRail({ history, onNewConv, onPickHistory, collapsed, onToggleCollapsed, onPickAgent, loggedIn, onSetLoggedIn, onOpenAuth, userMenuOpen, onToggleMenu, onCloseMenu }) {
  return (
    <aside className={'rail' + (collapsed ? ' rail--collapsed' : '')}>

      {/* Brand / logo row */}
      <button className="rail__brand" onClick={onNewConv} title="Home">
        <span className="rail__brand-mark"><AlmaMark /></span>
        <span className="rail__text">Ask [System]</span>
      </button>

      {/* Toggle row — separate from brand */}
      <div className="rail__toggle">
        <button className="rail__icon-btn" title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} onClick={onToggleCollapsed}>
          {Icon.Sidebar()}
        </button>
      </div>

      {/* Nav section — New chat, Saved, Projects */}
      <div className="rail__section">
        <button className="rail__item" onClick={onNewConv}>
          <span className="rail__item-icon">{Icon.NewChat()}</span>
          <span className="rail__text">New chat</span>
        </button>
        {loggedIn ? (
          <>
            <button className="rail__item">
              <span className="rail__item-icon">{Icon.Bookmark()}</span>
              <span className="rail__text">Saved</span>
            </button>
            <button className="rail__item">
              <span className="rail__item-icon">{Icon.Folder()}</span>
              <span className="rail__text">Projects</span>
              <span className="rail__item-trail">{Icon.PlusCircle()}</span>
            </button>
          </>
        ) : collapsed ? (
          <>
            <button className="rail__item" title="Saved" onClick={onOpenAuth}>
              <span className="rail__item-icon">{Icon.Bookmark()}</span>
              <span className="rail__text">Saved</span>
            </button>
            <button className="rail__item" title="Projects" onClick={onOpenAuth}>
              <span className="rail__item-icon">{Icon.Folder()}</span>
              <span className="rail__text">Projects</span>
            </button>
          </>
        ) : (
          <>
            <RailLockedItem
              icon="Bookmark" label="Saved"
              title="Save anything you find"
              desc="Bookmark doctors, visits, and answers to revisit them later."
              onSignIn={onOpenAuth} />
            <RailLockedItem
              icon="Folder" label="Projects"
              title="Organize care by project"
              desc="Group chats by condition, family member, or upcoming visit."
              onSignIn={onOpenAuth} />
          </>
        )}
      </div>

      <div className="rail__divider"></div>

      {/* Agents section */}
      <div className="rail__section">
        <div className="rail__label rail__section-head">Agents</div>
        {PRIMARY_NAV.map((n, i) => {
          if (n.requiresAuth && !loggedIn) {
            if (collapsed) {
              return (
                <button key={i} className="rail__item" title={n.label} onClick={onOpenAuth}>
                  <span className="rail__item-icon">{Icon[n.icon]()}</span>
                  <span className="rail__text">{n.label}</span>
                </button>
              );
            }
            return (
              <RailLockedItem
                key={i} icon={n.icon} label={n.label}
                title={n.promo?.title || `Log in to use ${n.label}`}
                desc={n.promo?.desc || 'Sign up to unlock this agent.'}
                onSignIn={onOpenAuth} />
            );
          }
          return (
            <button
              key={i}
              className="rail__item"
              title={n.label}
              onClick={() => n.kind === 'agent' ? onPickAgent(n.id) : n.query && onPickHistory(n.query)}>
              <span className="rail__item-icon">{Icon[n.icon]()}</span>
              <span className="rail__text">{n.label}</span>
            </button>
          );
        })}
      </div>

      <div className="rail__divider"></div>

      {/* Recent section — hidden when collapsed */}
      {loggedIn && (
        <div className="rail__section rail__section--recent">
          <div className="rail__label rail__section-head">Recent</div>
          {history.map((h) => (
            <button
              key={h.id}
              className={'rail__recent' + (h.active ? ' rail__recent--active' : '')}
              onClick={() => onPickHistory(h.query)}>
              <span className="rail__recent-text">{h.q}</span>
              {h.active && <span className="rail__recent-more" onClick={(e) => e.stopPropagation()}>{Icon.MoreHorizontal()}</span>}
            </button>
          ))}
        </div>
      )}

      <div style={{ flex: 1 }}></div>

      {/* Logged-out: callout (expanded) or login button (collapsed) */}
      {!loggedIn && (
        <>
          <div className="signin-callout">
            <div className="signin-callout__title">Save your chats</div>
            <div className="signin-callout__desc">
              Log in to get personalized recommendations, save your care profile, and revisit past conversations.
            </div>
            <div className="signin-callout__actions">
              <button className="signin-callout__primary" onClick={onOpenAuth}>Log in</button>
              <button className="signin-callout__secondary" onClick={onOpenAuth}>Sign up</button>
            </div>
          </div>
          <button className="rail__item rail__item--login" title="Log in" onClick={onOpenAuth}>
            <span className="rail__item-icon">{Icon.Person()}</span>
            <span className="rail__text">Log in</span>
          </button>
        </>
      )}

      {/* Logged-in: user row */}
      {loggedIn && (
        <div className="rail__user-wrap">
          {userMenuOpen && (
            <div className="user-menu">
              <button className="user-menu__item" onClick={() => {onCloseMenu();onPickAgent('care-profile');}}>
                <span className="user-menu__icon">{Icon.Person()}</span>
                <span>Care profile</span>
              </button>
              <button className="user-menu__item" onClick={() => {onCloseMenu();onPickAgent('preferences');}}>
                <span className="user-menu__icon">{Icon.Sliders()}</span>
                <span>Search preferences</span>
              </button>
              <button className="user-menu__item" onClick={() => {onCloseMenu();onPickAgent('settings');}}>
                <span className="user-menu__icon">{Icon.Settings()}</span>
                <span>Settings</span>
              </button>
              <button className="user-menu__item">
                <span className="user-menu__icon">{Icon.Globe()}</span>
                <span>Language</span>
                <span className="user-menu__trail">English</span>
              </button>
              <div className="user-menu__divider"></div>
              <button className="user-menu__item user-menu__item--danger" onClick={() => {onCloseMenu();onSetLoggedIn(false);}}>
                <span className="user-menu__icon">{Icon.LogOut()}</span>
                <span>Log out</span>
              </button>
            </div>
          )}
          <div className={'rail__user' + (userMenuOpen ? ' rail__user--open' : '')} onClick={onToggleMenu}>
            <div className="rail__user-avatar">RM</div>
            <div className="rail__user-text">
              <div className="rail__user-name">Ryan McCarty</div>
              <div className="rail__user-sub">Signed in</div>
            </div>
            <button className="rail__user-action">{Icon.ChevronUpDown()}</button>
          </div>
        </div>
      )}
    </aside>
  );
}

/* === Main header (Search ⌄ left) === */
function MainHeader({ mode, onModeChange }) {
  const labels = { search: 'Search', 'check-symptoms': 'Check symptoms', 'find-care': 'Find care', 'schedule': 'Schedule appointment', 'care-profile': 'Care profile', 'preferences': 'Search preferences', 'settings': 'Settings' };
  return (
    <div className="main__header">
      <button className="main__mode">
        <span>{labels[mode] || 'Search'}</span>
        <span className="main__mode-caret">{Icon.ChevronDown()}</span>
      </button>
    </div>);

}

/* === Chat header (sticky) — name + faceted tabs + role dropdown === */
const ROLE_OPTIONS = [
{ id: 'patient', label: "I'm a Patient" },
{ id: 'caregiver', label: "I'm a Caregiver" },
{ id: 'physician', label: "I'm a Physician" },
{ id: 'researcher', label: "I'm a Researcher" }];


function ChatHeader({ chatLabel, tabs, activeTab, onTabChange, docked }) {
  const [roleOpen, setRoleOpen] = React.useState(false);
  const [role, setRole] = React.useState('patient');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const roleRef = React.useRef(null);
  const menuRef = React.useRef(null);

  React.useEffect(() => {
    const handler = (e) => {
      if (roleRef.current && !roleRef.current.contains(e.target)) setRoleOpen(false);
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const roleLabel = ROLE_OPTIONS.find((r) => r.id === role)?.label || "I'm a Patient";
  const showDocked = docked && tabs && tabs.length > 1;

  return (
    <div className={'chat-header' + (showDocked ? ' chat-header--docked' : '')}>
      <div className="chat-header__left" ref={menuRef}>
        <div className="chat-header__name" title={chatLabel}>{chatLabel}</div>
        <button
          className={'chat-header__more' + (menuOpen ? ' chat-header__more--open' : '')}
          onClick={() => setMenuOpen((o) => !o)}
          title="Chat options">
          {Icon.MoreHorizontal()}
        </button>
        {menuOpen &&
        <div className="chat-menu">
            <button className="chat-menu__item">Rename</button>
            <button className="chat-menu__item">Save chat</button>
            <button className="chat-menu__item">Export</button>
            <div className="chat-menu__divider"></div>
            <button className="chat-menu__item chat-menu__item--danger">Delete</button>
          </div>
        }
      </div>

      <div className="chat-header__tabs" role="tablist" aria-hidden={!showDocked}>
        {showDocked && tabs.map((t) => {
          const showCount = t.count != null && t.confidence !== 'low';
          const dotKind = !showCount && (t.confidence === 'gated' ? 'gated' : t.confidence === 'low' ? 'soft' : null);
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={activeTab === t.id}
              className={'chat-tab chat-tab--compact' + (activeTab === t.id ? ' chat-tab--active' : '') + (dotKind ? ' chat-tab--' + dotKind : '')}
              onClick={() => onTabChange && onTabChange(t.id)}>
              <span className="chat-tab__icon">{Icon[t.icon]()}</span>
              <span className="chat-tab__label">{t.label}</span>
              {showCount && <span className="chat-tab__count">{t.count}</span>}
              {!showCount && t.confidence === 'gated' && <span className="chat-tab__lock">{Icon.Lock()}</span>}
            </button>
          );
        })}
      </div>

      <div className="chat-header__right" ref={roleRef}>
        <button
          className={'role-select' + (roleOpen ? ' role-select--open' : '')}
          onClick={() => setRoleOpen((o) => !o)}>
          <span>{roleLabel}</span>
          <span className="role-select__caret">{Icon.ChevronDown()}</span>
        </button>
        {roleOpen &&
        <div className="role-menu">
            <div className="role-menu__header">View results for</div>
            {ROLE_OPTIONS.map((r) =>
          <button
            key={r.id}
            className={'role-menu__item' + (role === r.id ? ' role-menu__item--active' : '')}
            onClick={() => {setRole(r.id);setRoleOpen(false);}}>
                <span>{r.label}</span>
                {role === r.id && <span className="role-menu__check">{Icon.Check()}</span>}
              </button>
          )}
            <div className="role-menu__footer">Personalizes language, sources, and detail level.</div>
          </div>
        }
      </div>
    </div>);

}

/* === Check Symptoms — first screen of agent === */
const SYMPTOM_BODY_AREAS = [
{ id: 'head', label: 'Head & face', sub: 'Headache, sinus, eye, ear' },
{ id: 'chest', label: 'Chest & breathing', sub: 'Cough, breath, heart' },
{ id: 'abdomen', label: 'Stomach & digestion', sub: 'Nausea, pain, bowel' },
{ id: 'back', label: 'Back & spine', sub: 'Upper, lower, neck' },
{ id: 'joints', label: 'Joints & muscles', sub: 'Knee, shoulder, sprain' },
{ id: 'skin', label: 'Skin & rash', sub: 'Itch, bump, discoloration' },
{ id: 'mental', label: 'Mood & sleep', sub: 'Anxiety, stress, sleep' },
{ id: 'general', label: 'General feeling', sub: 'Fever, fatigue, cold' }];


function SymptomChecker({ onStart, onAsk }) {
  const [area, setArea] = React.useState(null);
  const [draft, setDraft] = React.useState('');

  const begin = () => {
    if (draft.trim()) onAsk(draft.trim());else
    if (area) onAsk(`I have a ${area.label.toLowerCase()} concern`);
  };

  return (
    <div className="agent fade-in">
      <div className="agent__head">
        <div className="agent__badge">
          <span className="agent__badge-icon">{Icon.Clipboard()}</span>
          <span>Symptom Checker</span>
        </div>
        <h1 className="agent__title">What's bothering you today?</h1>
        <p className="agent__sub">
          A few quick questions, then we'll suggest possible causes, what to do next, and whether you should see a clinician. This isn't a diagnosis — it's a starting point.
        </p>
      </div>

      <div className="agent__section">
        <div className="agent__label">1 · Pick a body area</div>
        <div className="body-grid">
          {SYMPTOM_BODY_AREAS.map((a) =>
          <button
            key={a.id}
            className={'body-card' + (area?.id === a.id ? ' body-card--active' : '')}
            onClick={() => setArea(a)}>
              <span className="body-card__label">{a.label}</span>
              <span className="body-card__sub">{a.sub}</span>
            </button>
          )}
        </div>
      </div>

      <div className="agent__section">
        <div className="agent__label">2 · Or describe what you're feeling</div>
        <div className="agent__input">
          <textarea
            className="input__textarea"
            placeholder="e.g. Sharp pain in my lower back when I bend forward, started 3 days ago…"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={3}
            style={{ minHeight: 80 }} />
          
        </div>
      </div>

      <div className="agent__actions">
        <div className="agent__note">
          {Icon.Alert()}
          <span>If you're experiencing chest pain, severe bleeding, signs of stroke, or thoughts of harm — call 911 or go to an ER.</span>
        </div>
        <button
          className="agent__begin"
          disabled={!area && !draft.trim()}
          onClick={begin}>
          <span>Begin assessment</span>
          <span>{Icon.ArrowRight()}</span>
        </button>
      </div>
    </div>);

}

/* === App === */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "rightRail": false,
  "density": "comfortable",
  "loggedIn": true
} /*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = window.useTweaks ? window.useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, () => {}];
  const [messages, setMessages] = useS([]);
  const [draft, setDraft] = useS('');
  const [collapsed, setCollapsed] = useS(false);
  const [agent, setAgent] = useS(null); // null | 'check-symptoms' | 'preferences' | 'settings'
  const [loggedIn, setLoggedIn] = useS(tweaks.loggedIn !== false);
  const [userMenuOpen, setUserMenuOpen] = useS(false);
  const [authOpen, setAuthOpen] = useS(false);
  const [activeTab, setActiveTab] = useS(null);
  const [tabsDocked, setTabsDocked] = useS(false);
  const [scrollEl, setScrollEl] = useS(null);
  const scrollRef = useR(null);
  const attachScroll = useCallback((el) => { scrollRef.current = el; setScrollEl(el); }, []);

  // Sync tweak → state
  useE(() => {setLoggedIn(tweaks.loggedIn !== false);}, [tweaks.loggedIn]);

  // Close user menu on outside click
  useE(() => {
    if (!userMenuOpen) return;
    const close = (e) => {
      if (!e.target.closest('.rail__user-wrap') && !e.target.closest('.user-menu')) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [userMenuOpen]);

  // Resolve which mock answer to use
  const resolveAnswer = (q) => {
    const ql = q.toLowerCase();
    if (ql.includes('chest') || ql.includes('shortness') || ql.includes('breath')) return window.AlmaData.CHEST_PAIN;
    if (ql.includes('stretch') || ql.includes('exercise')) return window.AlmaData.STRETCHES;
    if (ql.includes('urgent') || ql.includes('walk-in') || ql.includes('open right now') || ql.includes('open now')) return window.AlmaData.URGENT_CARE;
    if (ql.includes('colonoscopy') || ql.includes('prepare for') || ql.includes('procedure prep')) return window.AlmaData.COLONOSCOPY;
    if (ql.includes('cover') || ql.includes('insurance') || ql.includes('my plan') || ql.includes('copay') || ql.includes('deductible')) return window.AlmaData.PT_COVERAGE;
    if (ql.includes('find a') || ql.includes('primary care') || ql.includes('doctor') || ql.includes('pcp') || ql.includes('physician')) return window.AlmaData.PRIMARY_CARE;
    return window.AlmaData.BACK_PAIN;
  };

  const ask = useCallback((q) => {
    const data = resolveAnswer(q);
    // Stable per-message id so async updates aren't sensitive to array index
    // (which broke when newConv() cleared the list between click and ask).
    const msgId = 'm-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7);
    const newMsg = {
      id: msgId,
      query: q,
      data: { ...data, query: q },
      status: 'thinking',
      sectionsVisible: 0,
    };
    setMessages((m) => [...m, newMsg]);
    setDraft('');

    const update = (changes) =>
      setMessages((m) => m.map((mm) => (mm.id === msgId ? { ...mm, ...changes } : mm)));

    // Step through phases
    setTimeout(() => update({ status: 'summary' }), 1100);

    // After summary streams, reveal sections one by one
    const summaryDur = data.summary.length * 220 + 400;
    setTimeout(() => update({ status: 'sections', sectionsVisible: 1 }), 1100 + summaryDur);

    data.sections.forEach((_, idx) => {
      setTimeout(() => update({ sectionsVisible: idx + 1 }), 1100 + summaryDur + idx * 600);
    });

    setTimeout(
      () => update({ status: 'done', sectionsVisible: data.sections.length }),
      1100 + summaryDur + data.sections.length * 600 + 200
    );

    // Scroll to the new message
    setTimeout(() => {
      const el = document.querySelector(`[data-msg-id="${msgId}"]`);
      if (el && scrollRef.current) {
        scrollRef.current.scrollTo({ top: el.offsetTop - 24, behavior: 'smooth' });
      }
    }, 100);
  }, []);

  const newConv = () => {
    setMessages([]);
    setDraft('');
    setActiveTab(null);
    setTabsDocked(false);
    setAgent(null);
  };

  const pickAgent = (id) => {
    setMessages([]);
    setDraft('');
    setActiveTab(null);
    setTabsDocked(false);
    if (id === 'check-symptoms') setAgent('check-symptoms');else
    if (id === 'care-profile') setAgent('care-profile');else
    if (id === 'preferences') setAgent('preferences');else
    if (id === 'settings') setAgent('settings');else
    if (id === 'find-care') {
      setAgent(null);
      setTimeout(() => ask('Find a primary care doctor near me'), 60);
    } else if (id === 'schedule') {
      setAgent(null);
      setTimeout(() => ask('Urgent care open right now'), 60);
    } else {
      setAgent(null);
    }
  };

  const handleSetLoggedIn = (v) => {
    setLoggedIn(v);
    setTweak('loggedIn', v);
    setUserMenuOpen(false);
    if (!v) {setMessages([]);setAgent(null);}
  };

  const onFollowUp = (q) => ask(q);
  const onSubmit = (q) => ask(q);

  // Inline citation popover — keeps sources discoverable in-context
  const [citePop, setCitePop] = useS(null); // {n, source, x, y}
  useE(() => {
    const handler = (e) => {
      const a = e.target.closest && e.target.closest('a.cite');
      if (!a) return;
      e.preventDefault();
      e.stopPropagation();
      const msg = a.closest('.message');
      if (!msg) return;
      let sources = [];
      try { sources = JSON.parse(msg.getAttribute('data-sources') || '[]'); }
      catch (_) { sources = []; }
      const text = (a.textContent || '').trim();
      const n = Number(text) || Number((a.getAttribute('href') || '').replace('#src-', ''));
      const source = sources.find((s) => s.num === n);
      if (!source) return;
      const r = a.getBoundingClientRect();
      setCitePop({ n, source, x: r.left + r.width / 2, y: r.bottom + 6 });
    };
    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, []);
  useE(() => {
    if (!citePop) return;
    const close = (e) => {
      if (e.target.closest && (e.target.closest('.cite-pop') || e.target.closest('a.cite'))) return;
      setCitePop(null);
    };
    const esc = (e) => { if (e.key === 'Escape') setCitePop(null); };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', esc);
    };
  }, [citePop]);

  const hasMessages = messages.length > 0;

  // Active recent item — derived from the current chat's chatLabel so it
  // always matches the open conversation. Falls back to no-active on landing.
  const activeChatLabel = messages[0]?.data?.chatLabel || null;
  const historyWithActive = HISTORY.map((h) => ({
    ...h,
    active: activeChatLabel ? resolveAnswer(h.query).chatLabel === activeChatLabel : false,
  }));

  return (
    <div className={'app' + (collapsed ? ' app--collapsed' : '')}>
      <LeftRail
        history={historyWithActive}
        onNewConv={newConv}
        onPickHistory={(q) => {newConv();setTimeout(() => ask(q), 60);}}
        collapsed={collapsed}
        onToggleCollapsed={() => setCollapsed((c) => !c)}
        onPickAgent={pickAgent}
        loggedIn={loggedIn}
        onSetLoggedIn={handleSetLoggedIn}
        onOpenAuth={() => setAuthOpen(true)}
        userMenuOpen={userMenuOpen}
        onToggleMenu={() => setUserMenuOpen((v) => !v)}
        onCloseMenu={() => setUserMenuOpen(false)} />
      
      <main className="main">
        {hasMessages ?
        <ChatHeader
          chatLabel={messages[0]?.data?.chatLabel || messages[0]?.query || 'Chat'}
          tabs={messages[0]?.data?.tabs}
          activeTab={activeTab || (messages[0]?.data?.tabs && messages[0].data.tabs[0]?.id)}
          onTabChange={setActiveTab}
          docked={tabsDocked} /> :

        agent ? <MainHeader mode={agent} /> : null
        }
        <div className="main__scroll" ref={attachScroll}>
          {!hasMessages && agent === 'check-symptoms' &&
          <SymptomChecker
            onAsk={(q) => {setAgent(null);ask(q);}} />

          }
          {!hasMessages && agent === 'care-profile' &&
          <window.CareProfile onDone={() => setAgent(null)} />
          }
          {!hasMessages && agent === 'preferences' &&
          <window.SearchPreferences
            onSave={() => setAgent(null)}
            onCancel={() => setAgent(null)} />

          }
          {!hasMessages && agent === 'settings' &&
          <window.SearchPreferences
            onSave={() => setAgent(null)}
            onCancel={() => setAgent(null)} />

          }
          {!hasMessages && !agent &&
          <Landing
            onAsk={ask}
            draft={draft}
            setDraft={setDraft}
            loggedIn={loggedIn}
            onSignIn={() => setAuthOpen(true)} />

          }
          {hasMessages &&
          <div className="col">
              {messages.map((m, i) =>
            <Message
              key={m.id || i}
              msg={m}
              idx={i}
              isLast={i === messages.length - 1 && m.status === 'done'}
              isCurrent={i === messages.length - 1}
              activeTab={activeTab || (messages[0]?.data?.tabs && messages[0].data.tabs[0]?.id)}
              onTabChange={setActiveTab}
              scrollRoot={scrollEl}
              onDockChange={setTabsDocked}
              onFollowUp={onFollowUp}
              loggedIn={loggedIn} />
            )}
            </div>
          }
        </div>
        {hasMessages &&
        <div className="composer">
            <div className="composer__inner">
              <InputBar
              value={draft}
              onChange={setDraft}
              onSubmit={onSubmit}
              placeholder="Ask a follow-up question…" />
            
            </div>
          </div>
        }
      </main>

      {/* Tweaks panel */}
      {window.TweaksPanel &&
      <window.TweaksPanel title="Tweaks">
          <window.TweakSection title="State">
            <window.TweakToggle
            label="Signed in"
            hint="Toggle the logged-in / logged-out state"
            value={loggedIn}
            onChange={(v) => handleSetLoggedIn(v)} />
          
            <window.TweakToggle
            label="Right rail"
            hint="Show related media beside the answer"
            value={tweaks.rightRail}
            onChange={(v) => setTweak('rightRail', v)} />
          
            <window.TweakRadio
            label="Density"
            value={tweaks.density}
            options={[
            { value: 'comfortable', label: 'Comfortable' },
            { value: 'compact', label: 'Compact' }]
            }
            onChange={(v) => setTweak('density', v)} />
          
          </window.TweakSection>
          <window.TweakSection title="Try a screen">
            <window.TweakButton label="Care profile" onClick={() => pickAgent('care-profile')} />
            <window.TweakButton label="Search preferences" onClick={() => pickAgent('preferences')} />
            <window.TweakButton label="Check symptoms" onClick={() => pickAgent('check-symptoms')} />
            <window.TweakButton label="Ask: Lower back pain" onClick={() => {newConv();setTimeout(() => ask('What causes lower back pain?'), 80);}} />
            <window.TweakButton label="Reset to landing" onClick={newConv} secondary />
          </window.TweakSection>
        </window.TweaksPanel>
      }

      {/* Auth modal (logged-out flows) */}
      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        onComplete={() => { setAuthOpen(false); handleSetLoggedIn(true); }} />

      {/* Right rail tweak surface */}
      {tweaks.rightRail && hasMessages && <RightRail />}

      {/* Inline citation popover */}
      {citePop && (
        <div
          className="cite-pop"
          role="dialog"
          style={{ left: Math.max(16, Math.min(citePop.x - 160, window.innerWidth - 336)), top: citePop.y }}
          onMouseDown={(e) => e.stopPropagation()}>
          <div className="cite-pop__head">
            <span className="cite-pop__num">{citePop.n}</span>
            <span className="cite-pop__source">{citePop.source.name}</span>
            <button className="cite-pop__close" onClick={() => setCitePop(null)} aria-label="Close">{Icon.X()}</button>
          </div>
          <div className="cite-pop__title">{citePop.source.title}</div>
          <div className="cite-pop__meta">
            <span className="cite-pop__date">{citePop.source.date}</span>
            <a className="cite-pop__open" href={citePop.source.url || '#'}>
              <span>Open source</span>
              <span>{Icon.ArrowRight()}</span>
            </a>
          </div>
        </div>
      )}
    </div>);

}

function RightRail() {
  return (
    <aside style={{
      position: 'fixed',
      right: 0, top: 0, bottom: 0,
      width: 280,
      borderLeft: '1px solid var(--border)',
      background: 'var(--bg)',
      padding: 18,
      overflowY: 'auto',
      zIndex: 5
    }}>
      <div className="rail__label">Nearby locations</div>
      <div style={{
        height: 160,
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 10,
        marginTop: 8,
        marginBottom: 16,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <svg width="100%" height="100%" viewBox="0 0 280 160" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, opacity: 0.5 }}>
          <path d="M0 100 Q 80 60 140 90 T 280 70" stroke="var(--border-strong)" strokeWidth="1.5" fill="none" />
          <path d="M40 0 L 60 160" stroke="var(--border-strong)" strokeWidth="1" fill="none" />
          <path d="M180 0 L 200 160" stroke="var(--border-strong)" strokeWidth="1" fill="none" />
        </svg>
        <div style={{ position: 'absolute', top: 40, left: 60, width: 16, height: 16, borderRadius: '50% 50% 50% 0', background: 'var(--warm)', transform: 'rotate(-45deg)' }}></div>
        <div style={{ position: 'absolute', top: 80, left: 130, width: 14, height: 14, borderRadius: '50% 50% 50% 0', background: 'var(--accent)', transform: 'rotate(-45deg)' }}></div>
        <div style={{ position: 'absolute', top: 60, left: 200, width: 14, height: 14, borderRadius: '50% 50% 50% 0', background: 'var(--accent)', transform: 'rotate(-45deg)' }}></div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {['[System] Midtown', '[System] West Side', '[System] Hudson Spine'].map((n, i) =>
        <div key={i} style={{ padding: '10px 12px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 13 }}>
            <div style={{ fontWeight: 500 }}>{n}</div>
            <div style={{ color: 'var(--text-muted)', fontSize: 12, marginTop: 2 }}>{['0.8 mi · Open', '1.2 mi · Open', '2.0 mi · By appt'][i]}</div>
          </div>
        )}
      </div>
    </aside>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);