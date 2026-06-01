import { Send } from 'lucide-react';
import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  }

  function validate() {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = '请输入你的称呼';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = '请输入有效邮箱';
    if (form.message.trim().length < 8) nextErrors.message = '留言至少需要 8 个字符';
    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('');
      return;
    }

    setStatus('留言已记录为静态演示状态，接入后端后即可真实提交。');
    setForm(initialForm);
    setErrors({});
  }

  return (
    <form className="contact-form sticker-card" onSubmit={handleSubmit} noValidate>
      <label>
        <span>称呼</span>
        <input
          name="name"
          value={form.name}
          onChange={updateField}
          placeholder="你的名字"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <small>{errors.name}</small>}
      </label>
      <label>
        <span>邮箱</span>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={updateField}
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <small>{errors.email}</small>}
      </label>
      <label>
        <span>留言</span>
        <textarea
          name="message"
          value={form.message}
          onChange={updateField}
          placeholder="想交流的内容..."
          rows="5"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <small>{errors.message}</small>}
      </label>
      <button className="btn btn-primary" type="submit">
        <span>发送留言</span>
        <span className="btn-icon" aria-hidden="true">
          <Send size={18} strokeWidth={2.6} />
        </span>
      </button>
      {status && <p className="form-status" role="status">{status}</p>}
    </form>
  );
}
