"use client"

export const dynamic = "force-dynamic"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { defaultTemplates, WATemplate } from "@/lib/whatsapp-templates"
import { MessageCircle, Plus, Save, Trash2, CheckCircle } from "lucide-react"

export default function WhatsAppTemplatesPage() {
  const [templates, setTemplates] = useState<WATemplate[]>([])
  const [activeTemplateId, setActiveTemplateId] = useState<string>("")
  const [editingTemplate, setEditingTemplate] = useState<WATemplate | null>(null)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("wa_templates")
    if (stored) {
      setTemplates(JSON.parse(stored))
    } else {
      setTemplates(defaultTemplates)
      localStorage.setItem("wa_templates", JSON.stringify(defaultTemplates))
    }
    
    const active = localStorage.getItem("wa_active_template")
    if (active) {
      setActiveTemplateId(active)
    } else {
      setActiveTemplateId(defaultTemplates[0].id)
      localStorage.setItem("wa_active_template", defaultTemplates[0].id)
    }
  }, [])

  const saveTemplates = (newTemplates: WATemplate[]) => {
    setTemplates(newTemplates)
    localStorage.setItem("wa_templates", JSON.stringify(newTemplates))
  }

  const setActive = (id: string) => {
    setActiveTemplateId(id)
    localStorage.setItem("wa_active_template", id)
  }

  const handleDelete = (id: string) => {
    const updated = templates.filter(t => t.id !== id)
    saveTemplates(updated)
    if (activeTemplateId === id && updated.length > 0) {
      setActive(updated[0].id)
    }
  }

  const handleSaveEdit = () => {
    if (!editingTemplate) return
    
    if (editingTemplate.id === "new") {
      const newId = "custom-" + Date.now()
      const updated = [...templates, { ...editingTemplate, id: newId }]
      saveTemplates(updated)
      setActive(newId)
    } else {
      const updated = templates.map(t => t.id === editingTemplate.id ? editingTemplate : t)
      saveTemplates(updated)
    }
    setEditingTemplate(null)
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-green-500/20 rounded-xl border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
            <MessageCircle className="h-6 w-6 text-green-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">WhatsApp Templates</h1>
            <p className="text-slate-400">Manage your manual follow-up messages</p>
          </div>
        </div>

        {editingTemplate ? (
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
            <h2 className="text-lg font-semibold text-white mb-4">
              {editingTemplate.id === "new" ? "Create New Template" : "Edit Template"}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Template Name</label>
                <input 
                  type="text" 
                  value={editingTemplate.name}
                  onChange={e => setEditingTemplate({...editingTemplate, name: e.target.value})}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-green-500/50"
                  placeholder="e.g. VIP Discount Offer"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message Content</label>
                <textarea 
                  value={editingTemplate.message}
                  onChange={e => setEditingTemplate({...editingTemplate, message: e.target.value})}
                  rows={6}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-green-500/50"
                  placeholder="Type your message here..."
                />
                <p className="text-xs text-slate-400 mt-2">
                  Variables available: <span className="text-blue-400 bg-blue-400/10 px-1 py-0.5 rounded">{"{{name}}"}</span> <span className="text-blue-400 bg-blue-400/10 px-1 py-0.5 rounded">{"{{product}}"}</span> <span className="text-blue-400 bg-blue-400/10 px-1 py-0.5 rounded">{"{{link}}"}</span>
                </p>
              </div>

              <div className="flex space-x-3 pt-4">
                <button 
                  onClick={handleSaveEdit}
                  disabled={!editingTemplate.name || !editingTemplate.message}
                  className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Template</span>
                </button>
                <button 
                  onClick={() => setEditingTemplate(null)}
                  className="px-6 py-2 bg-slate-800 text-white font-medium rounded-lg border border-white/10 hover:bg-slate-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-white">Your Templates</h2>
              <button 
                onClick={() => setEditingTemplate({ id: "new", name: "", message: "" })}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors flex items-center space-x-2 border border-white/10"
              >
                <Plus className="h-4 w-4" />
                <span>New Template</span>
              </button>
            </div>

            <div className="grid gap-4">
              {templates.map(template => (
                <div key={template.id} className={`bg-white/5 backdrop-blur-md border rounded-2xl p-5 transition-all ${activeTemplateId === template.id ? 'border-green-500/50 bg-green-500/5' : 'border-white/10 hover:border-white/20'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-lg font-medium text-white">{template.name}</h3>
                      {activeTemplateId === template.id && (
                        <span className="flex items-center space-x-1 px-2.5 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold border border-green-500/30">
                          <CheckCircle className="h-3 w-3" />
                          <span>Active</span>
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      {activeTemplateId !== template.id && (
                        <button 
                          onClick={() => setActive(template.id)}
                          className="px-3 py-1.5 text-sm bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                        >
                          Set Active
                        </button>
                      )}
                      <button 
                        onClick={() => setEditingTemplate(template)}
                        className="px-3 py-1.5 text-sm bg-white/10 hover:bg-white/20 text-blue-400 rounded-lg transition-colors"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(template.id)}
                        className="p-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-lg transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/50 p-4 rounded-lg text-slate-300 text-sm whitespace-pre-wrap font-mono border border-white/5">
                    {template.message}
                  </div>
                </div>
              ))}
              
              {templates.length === 0 && (
                <div className="text-center py-12 bg-white/5 border border-white/10 rounded-2xl">
                  <MessageCircle className="h-10 w-10 text-slate-500 mx-auto mb-3" />
                  <p className="text-slate-400">No templates found. Create one to get started.</p>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
